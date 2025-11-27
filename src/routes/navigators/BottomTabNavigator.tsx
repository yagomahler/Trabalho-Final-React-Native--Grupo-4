import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home';
import { Sobre } from '../../screens/Sobre';
import PlayerScreen from '../../screens/Player';
import { Login } from '../../screens/Login';
import Favoritos from '../../screens/Favoritos';
import Entypo from '@expo/vector-icons/Entypo';
import Pesquisa from '../../screens/Pesquisa'



const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
  Home: { id: String };
  Player: { id: String };
  Sobre: { id: String };
  Login: { id: String };
  Favoritos: undefined;
  Pesquisa: {}
};

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#000', paddingBottom: 2 },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa'
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen name="Player" component={PlayerScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="controller-play" size={24} color={color} />
          )
        }}
      />

      <Tab.Screen name="Pesquisa" component={Pesquisa}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="magnifying-glass" size={24} color={color} />
          )
        }} />

      <Tab.Screen name="Sobre" component={Sobre}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          )
        }} />

      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen name="Login" component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="login" size={24} color={color} />
          )
        }} />



    </Tab.Navigator>


  );
}