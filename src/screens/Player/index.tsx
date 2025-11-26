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

  const { track, playlist, index } = route.params as any;

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

    navigation.replace("PlayerScreen", {
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

    navigation.replace("PlayerScreen", {
      track: playlist[prevIndex],
      playlist,
      index: prevIndex
    });
  }

  return (
    <View style={styles.container}>

      
      <View style={styles.controls}>
        <TouchableOpacity onPress={prevTrack}>
          <Ionicons name="play-skip-back" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={isPlaying ? pauseSound : () => playSound(track.preview)}>
          <Ionicons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={48}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={nextTrack}>
          <Ionicons name="play-skip-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

    
      <Image
        style={{ width: 220, height: 220, alignSelf: "center", marginTop: 30 }}
        source={{
          uri:
            track?.album?.cover_medium ||
            track?.album?.cover_big ||
            track?.album?.cover ||
            undefined
        }}
      />

      
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
