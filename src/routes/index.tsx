import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./navigators/StackNavigator";


export const Routes = () => {
    return <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
}