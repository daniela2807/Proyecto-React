import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Producto/home";
import Producto from "../screens/Producto/Producto";
import colors from "../styles/colors";

const Stack = createStackNavigator();
export default function ProductoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTinColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: { backgroundColor: colors.bgLight },
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="producto"
        component={Producto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
