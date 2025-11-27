import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';

export default function PlayerScreen() {
  const route = useRoute();
  const navigation = useNavigation() as any;

  const defaultTrack = {
    id: 1987151117, 
    title: "Outubro de Fases",
    artist: { name: "Clube da Montanha" },
    album: {
      cover_medium: "https://cdn-images.dzcdn.net/images/cover/997f21a0205ba2dffd78a0a5876fdc62/250x250-000000-80-0-0.jpg"
    },
    preview:
      "https://cdnt-preview.dzcdn.net/api/1/1/e/2/e/0/e2e9480f64796a2873fe6861df7b9cee.mp3?hdnea=exp=1764207283~acl=/api/1/1/e/2/e/0/e2e9480f64796a2873fe6861df7b9cee.mp3*~data=user_id=0,application_id=42~hmac=08d63b5abd9147c8346c66f4e5a864adf6cb5acaa91ed2fe3745d1e65cbcfd67"
  };

  const params = route.params as any;

  const track = params?.track ?? defaultTrack;
  const playlist = params?.playlist ?? [defaultTrack];
  const index = params?.index ?? 0;


  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound(uri: string) {
    if (!uri) return;

    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
      return;
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: true }
    );

    setSound(newSound);
    setIsPlaying(true);
  }

  async function pauseSound() {
    if (!sound) return;
    await sound.pauseAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    playSound(track.preview);

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [track]);

  async function nextTrack() {
    if (!playlist) return;

    const nextIndex = index + 1;
    if (nextIndex >= playlist.length) return;

    if (sound) await sound.unloadAsync();
    setSound(null);

    navigation.replace("Player", {
      track: playlist[nextIndex],
      playlist,
      index: nextIndex
    });
  }

  async function prevTrack() {
    if (!playlist) return;

    const prevIndex = index - 1;
    if (prevIndex < 0) return;

    if (sound) await sound.unloadAsync();
    setSound(null);

    navigation.replace("Player", {
      track: playlist[prevIndex],
      playlist,
      index: prevIndex
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={prevTrack}>
          <Ionicons name="play-skip-back" size={50} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={isPlaying ? pauseSound : () => playSound(track.preview)}>
          <Ionicons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={70}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={nextTrack}>
          <Ionicons name="play-skip-forward" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.trackImage}>

      <Image
        style={{ width: 320, height: 320, alignSelf: "center" }}
        source={{
          uri:
            track?.album?.cover_medium ||
            track?.album?.cover_big ||
            track?.album?.cover ||
            undefined
        }}
      />
      </View>

      <Text style={styles.trackTitle}>
        {track?.title} — {track?.artist?.name}
      </Text>

      <LinearGradient
        colors={['transparent', '#aa00a9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 6, y: 1 }}
        style={styles.gradient}
      />
    </View>
  );
}
