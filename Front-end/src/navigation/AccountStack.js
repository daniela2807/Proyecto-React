import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/routers";
import Account from "../screens/Account/account";
import Cambiarnom from "../screens/Account/cambiarNombre";
import CambiarEmail from "../screens/Account/cambiarEmail";
import colors from "../styles/colors";
import cambiarContrasena from "../screens/Account/cambiarContrasena";
import Adresses from "../screens/Account/Adresses";
import AddAddress from "../screens/Account/AddAddress";


const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        //estos estilos se aplican en todos los header de stack.screen y lo que hacen es poner del mismo color que el menu de abajo de la patalla
        headerTintColor: colors.fontLight,
        headerStyle: { backgroundColor: colors.bgDark },
        cardStyle: {
          backgroundColor: colors.bgLight,
        },
      }}
    >
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="cambiar-nom"
        component={Cambiarnom}
        options={{ title: "Cambiar nombre completo" }}
      />
      <Stack.Screen
        name="cambiar-email"
        component={CambiarEmail}
        options={{ title: "Cambiar email" }}
      />
      <Stack.Screen
        name="cambiar-contra"
        component={cambiarContrasena}
        options={{ title: "Cambiar password" }}
      />
       <Stack.Screen
        name="direcciones"
        component={Adresses}
        options={{ title: "Direcciones" }}
      />
       <Stack.Screen
        name="add-address"
        component={AddAddress}
        options={{ title: "Add Adress" }}
      />
    </Stack.Navigator>
  );
}
