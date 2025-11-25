import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SobrePageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';

export const Sobre: React.FC<{ navigation: SobrePageNavigationProp }> = ({ navigation }) =>{
  return (
   <View>
<Text>Sobre</Text>
<TouchableOpacity onPress={() => navigation.navigate('Home', {id: 'Grupo4'})}>
    <Text>Indo para Home</Text>
</TouchableOpacity>
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