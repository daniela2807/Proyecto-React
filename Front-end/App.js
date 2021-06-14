import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import { AuthContext } from "./src/context/AuthContext";
import { UserContext } from "./src/context/AuthContext";
import Principal from "./src/screens/Principal";
import AppNavigation from "./src/navigation/AppNavigation"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [isLoading, setIsLoading] = useState(undefined);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(false);

  const authContext = React.useMemo(
    () => ({
      getUser: async () =>{
        const jsonValue = await AsyncStorage.getItem("@user");
        //console.log(pas)
        return JSON.parse(jsonValue).id
      },
      signIn:async(user, token) => {
        try {
          console.log("hola");
          console.log(user);
          console.log(JSON.stringify(user));
          const jsonValue = JSON.stringify(user[0]);
          console.log("user",jsonValue)
          await AsyncStorage.setItem("@user", jsonValue);
        } catch (e) {
          console.log(e);
        }
        setUser(JSON.stringify(user[0]))
        setUserToken(token);
        setIsLoading(false);
      },
      singOut: () => {
        setUserToken(false);
        setUser(false);
        setIsLoading(false);
      },
      signUp: async (user, token) => {
        try {
          console.log("hola");
          console.log(JSON.stringify(user));
          const jsonValue = JSON.stringify(user);
          setUser(jsonValue)
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
