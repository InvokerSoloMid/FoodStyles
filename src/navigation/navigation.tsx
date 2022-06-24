import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from ".";

import HomePage from "../screens/HomePage/HomePage";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="AuthScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{ gestureEnabled: false }}
    />
  </AuthStack.Navigator>
);

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ gestureEnabled: false }}
        // unMountOnBlur={true}
      />
    </HomeStack.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
