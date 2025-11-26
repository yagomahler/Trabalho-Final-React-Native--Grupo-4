import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
    <LinearGradient
      colors={['transparent', '#aa00a9']}
      start={{ x: 0, y: 1 }}
      end={{ x: 6, y: 1 }}
      style={styles.gradient}
      />
    </View>
  )
}
export default Sobre;