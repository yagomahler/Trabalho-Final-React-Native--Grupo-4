import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { HomePageNavigationProp } from '../../routes/navigators/StackNavigator';
import { styles } from './styles';

export const Home: React.FC<{ navigation: HomePageNavigationProp }> = ({ navigation }) =>{
  return (
    <View style={styles.container}>
        
<Text>Home</Text>
<TouchableOpacity onPress={() => navigation.navigate('Sobre', {id: 'Grupo4'})}>
    <Text>Indo para sobre</Text>
</TouchableOpacity>

    </View>
  )
}

export default Home;