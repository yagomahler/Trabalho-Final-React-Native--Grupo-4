import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import Home from '../../screens/Home'
import Sobre from '../../screens/Sobre';
import { BottomTabNavigator } from './BottomTabNavigator';
//import Player from '../../screens/Player';
//import Login from '../../screens/Login';
//import Album from '../../screens/Album';



const Stack = createStackNavigator<Parametros>();

export type Parametros = {
    MainTabs: undefined; 
    Home: { id: String };
    Sobre: { id: String };
}


export type HomePageNavigationProp = StackNavigationProp<Parametros, 'Home'>;
export type SobrePageNavigationProp = StackNavigationProp<Parametros, 'Sobre'>;
//export type PlayerPageNavigationProp = StackNavigationProp<Parametros, 'Player'>;
//export type LoginPageNavigationProp = StackNavigationProp<Parametros, 'Login'>;
//export type AlbumPageNavigationProp = StackNavigationProp<Parametros, 'Album'>;

export function StackNavigator() {
    return (

        <Stack.Navigator id={undefined}>
             <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Sobre" component={Sobre}  options={{headerShown: false}}/>
            {/*<Stack.Screen name="Player" component={Player}  options={{headerShown: false}}/>*/}
           {/* <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>*/}
           {/* <Stack.Screen name="Album" component={Album}  options={{headerShown: false}}/>*/}
        </Stack.Navigator>
    );
}

export default StackNavigator;