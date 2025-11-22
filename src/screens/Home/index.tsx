import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { HomePageNavigationProp } from '../../routes/navigators/StackNavigator';

export const Home: React.FC<{ navigation: HomePageNavigationProp }> = ({ navigation }) =>{
  return (
    <View>
        
<Text>Home</Text>
<TouchableOpacity onPress={() => navigation.navigate('Sobre', {id: 'Grupo4'})}>
    <Text>Indo para sobre</Text>
</TouchableOpacity>

    </View>
  )
}

export default Home;