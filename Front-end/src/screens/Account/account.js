import React from "react";
import {useState, useCallback} from "react"
import { useFocusEffect } from "@react-navigation/native"
import {ScrollView, Text } from "react-native";
import StatusBar from "../../components/StatusBar"
import Search from "../../components/Auth/Search";
import colors from "../../styles/colors"
import { getMeApi } from "../../api/user";

export default function account() {
  const [user, setUser]=useState(null);
  
  //en toda esta seccion de codigo lo que hace es hacer la chamba del call back para que cada vez que se entre a "mi cuenta"
  //traiga los datos del usuario aqui el problema es como obtener el token para de ahi sacar los datos del usuario activo
  //por lo pronto solo queremos sacar toda la info del usuario
  useFocusEffect(
    useCallback(() => {
      (async () =>{
        const response = await getMeApi();//aqui en getMeApi le enviariamos el token que se iria a user.js para que de ahi pueda hacer la autorizacion
        setUser(response);
      })()

    }, [])
  );


  return (
    <>
    <StatusBar backgroundColor={colors.bgDark} barStyle="light-content"/>
      <Search />
      <ScrollView>
        <Text>Estamos en mi Cuenta</Text>
      </ScrollView>
    </>
  );
}
