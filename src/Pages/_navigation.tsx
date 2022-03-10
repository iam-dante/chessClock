import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home"
import Settings from "./Settings";

const Stack = createNativeStackNavigator();

export default function _navigation() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown:false,
          animation:"slide_from_right"
        }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="setting" component={Settings} />

    </Stack.Navigator>
  );
}