import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import { AuthContext } from "./src/context/AuthContext";
import Principal from "./src/screens/Principal";
import AppNavigation from "./src/navigation/AppNavigation"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setIsLoading] = useState(undefined);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: async (user, token) => {
        try {
          console.log("hola");
          console.log(JSON.stringify(user[0]));
          const jsonValue = JSON.stringify(user[0]);
          await AsyncStorage.setItem("@user", jsonValue);
        } catch (e) {
          console.log(e);
        }
        setUserToken(token);
        setIsLoading(false);
      },
      singOut: () => {
        setUserToken(null);
        setUser(null);
        setIsLoading(false);
      },
      signUp: async (user, token) => {
        try {
          console.log("hola");
          console.log(JSON.stringify(user));
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem("@user", jsonValue);
        } catch (e) {
          console.log(e);
        }
        setUserToken(token);

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

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider>
        {userToken ? <AppNavigation /> : <AuthScreen />}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
