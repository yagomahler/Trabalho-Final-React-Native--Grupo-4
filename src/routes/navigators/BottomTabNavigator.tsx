import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../../screens/Home';
import { Sobre } from '../../screens/Sobre';
import PlayerScreen from '../../screens/Player';
//import { Login } from '../../screens/Login';

import Entypo from '@expo/vector-icons/Entypo';



const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList ={
Home: {id: String};
Player: {id: String};
Sobre: {id: String};
Login: {id: String};
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

      <Tab.Screen name="Sobre" component={Sobre}
      options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          )
        }}/>

      {/*<Tab.Screen name="Login" component={Login}
      options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="login" size={24} color={color} />
          )
        }}/> */}
    </Tab.Navigator>
  );
}