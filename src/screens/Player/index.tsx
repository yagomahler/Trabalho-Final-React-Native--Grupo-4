import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlayerScreen() {
  const route = useRoute();
  const { track } = (route.params || {}) as any;
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={24}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-circle" size={48}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={24}/>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri:
            track?.album?.cover_xl ||
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
