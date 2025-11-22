import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { SobrePageNavigationProp } from '../../routes/navigators/StackNavigator';

export const Sobre: React.FC<{ navigation: SobrePageNavigationProp }> = ({ navigation }) =>{
  return (
   <View>
<Text>Sobre</Text>
<TouchableOpacity onPress={() => navigation.navigate('Home', {id: 'Grupo4'})}>
    <Text>Indo para Home</Text>
</TouchableOpacity>
   </View>
  )
}

export default Sobre;