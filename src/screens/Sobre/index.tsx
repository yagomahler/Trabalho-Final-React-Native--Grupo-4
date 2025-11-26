import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export const Sobre = () => {
  return (
    <View style={styles.container}>Sobre
    <LinearGradient
      colors={['transparent', '#aa00a9']}
      start={{ x: 0, y: 1 }}
      end={{ x: 6, y: 1 }}
      style={styles.gradient}
      />
    </View>
  )
}

export default Sobre