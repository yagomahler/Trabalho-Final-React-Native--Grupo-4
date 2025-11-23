import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./navigators/StackNavigator";
import { BottomTabNavigator } from "./navigators/BottomTabNavigator";


export const Routes = () => {
    return <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
}