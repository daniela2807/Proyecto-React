
import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import { AuthContext } from './src/context/AuthContext';
import Principal from './src/screens/Principal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(undefined);
  const [userToken, setUserToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const authContext = React.useMemo(() =>({
    signIn: (user, token) => {
      console.log("entra")
      console.log(user[0])
      setUser(user[0]);
      setUserToken(token);
      setIsLoading(false);
      storeData = async () => {
        try{
          const jsonValue = JSON.stringify(user[0])
          await AsyncStorage.setItem('@user', jsonValue)
        }catch(e){
          console.log(e)
        }
      }
    },
    singOut: () => {
      setUserToken(null);
      setUser(null);
      setIsLoading(false);
    },
    signUp: (user, token) => {
      setUser(user[0]);
      setUserToken(token);
      setIsLoading(false);
      storeData = async () => {
        try{
          const jsonValue = JSON.stringify(user)
          await AsyncStorage.setItem('@user', jsonValue)
        }catch(e){
          console.log(e)
        }
      }
    },
  }),[])

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
       </AuthContext.Provider>)}
