import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import { AuthContext } from "./src/context/AuthContext";
// se imporat el AppNavigation que es el que contiene el menu de navegacion
import AppNavigation from "./src/navigation/AppNavigation";


export default function App() {
  const [isLoading, setIsLoading] = React.useState(undefined);
  const [userToken, setUserToken] = React.useState(false);

  const authContext = React.useMemo(
    () => ({
      singIn: (email) => {
        console.log(email);
        setUserToken("vfeef");
        setIsLoading(false);
      },
      singOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      signUp: () => {
        setUserToken("vfeef");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  // finalmente se renderiza aqui el menu que a su vez renderiza las "screen"
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider>
        {userToken ? <AppNavigation/> : <AuthScreen />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
