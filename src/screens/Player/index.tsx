import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
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

    </View>
  );
}
