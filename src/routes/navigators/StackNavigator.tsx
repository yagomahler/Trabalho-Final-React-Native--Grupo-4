import { createStackNavigator } from '@react-navigation/stack'
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import Home from '../../screens/Home'
import Sobre from '../../screens/Sobre';



const Stack = createStackNavigator<Parametros>();

export type Parametros = {
    Home: { id: String };
    Sobre: { id: String };
}


export type HomePageNavigationProp = StackNavigationProp<Parametros, 'Home'>;
export type SobrePageNavigationProp = StackNavigationProp<Parametros, 'Sobre'>;


export function StackNavigator() {
    return (

        <Stack.Navigator id={undefined}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    );
}

export default StackNavigator;