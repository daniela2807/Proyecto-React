
import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import { AuthContext } from './src/context/AuthContext';
import Principal from './src/screens/Principal';

export default function App() {
  const [auth, setAuth] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(undefined);
  const [userToken, setUserToken] = React.useState(false);

  const authContext = React.useMemo(() =>({
    singIn:() => {
      setUserToken('jkdjwe');
      setIsLoading(false);
    },
    singOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('jkdjwe');
      setIsLoading(false);
    }
  }))

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  },[]);

  if(isLoading){
    return (
      <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value = {authContext}>
     <PaperProvider>
       {userToken ? <Principal/> : <AuthScreen />}
       </PaperProvider>
       </AuthContext.Provider>
  );
}
