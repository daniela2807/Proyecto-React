import React from "react";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Auth/Search";
import colors from "../../styles/colors";
import Userinfo from "../../components/Account/Userinfo";
import Menu from "../../components/Account/menu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenLoading from "../../components/ScreenLoading";


export default function account() {
  const [user, setUser] = useState(null);
  //en toda esta seccion de codigo lo que hace es hacer la chamba del call back para que cada vez que se entre a "mi cuenta"
  //traiga los datos del usuario aqui el problema es como obtener el token para de ahi sacar los datos del usuario activo
  //por lo pronto solo queremos sacar toda la info del usuario
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const jsonValue = await AsyncStorage.getItem("@user");
        setUser(JSON.parse(jsonValue));
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      {!user ? ( //si el usuario no tiene contenido se muestra el loading
        <ScreenLoading size="large" />
      ) : (
        //pero si si tiene ya algo el usuario entramos a mostrar su información, en nuestro caso siempre
        //mostrara el loading por que aun no obtenemos los datos en "user"
        <>
          <ScrollView>
            <Search/>
            <Userinfo user={user} />
            <Menu user/>
          </ScrollView>
        </>
      )}
    </>
  );
}
