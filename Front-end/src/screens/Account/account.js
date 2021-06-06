import React from "react";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Auth/Search";
import colors from "../../styles/colors";
import Userinfo from "../../components/Account/Userinfo";
import { getMeApi } from "../../api/user";
import ScreenLoading from "../../components/ScreenLoading";

export default function account() {
  const [user, setUser] = useState(null);

  //en toda esta seccion de codigo lo que hace es hacer la chamba del call back para que cada vez que se entre a "mi cuenta"
  //traiga los datos del usuario aqui el problema es como obtener el token para de ahi sacar los datos del usuario activo
  //por lo pronto solo queremos sacar toda la info del usuario
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(); //aqui en getMeApi le enviariamos el token que se iria a user.js para que de ahi pueda hacer la autorizacion
        setUser(response);
      })();
    }, [])
  );

  //ESTO SE COMENTO YA QUE POR LA CONDICIÓN QUE NUNCA IBA A SALIR DEL LOADING POR LA FALTA DE INFOMRACION EN EL STATE "USER" LO COMENTE 
  //YA QUE TENGAMOS LA INFO EN USER PODREMOS DESCOMENTAR ESTA SECCIÓN
  // return (
  //   <>
  //     <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
  //     {!user ? ( //si el usuario no tiene contenido se muestra el loading
  //       <ScreenLoading size="large" />
  //     ) : ( //pero si si tiene ya algo el usuario entramos a mostrar su información, en nuestro caso siempre
  //       //mostrara el loading por que aun no obtenemos los datos en "user"
  //       <>
  //         <Search />
  //         <ScrollView>
  //           <Userinfo user={user} />
  //         </ScrollView>
  //       </>
  //     )}
  //   </>
  // );

  //AQUI NADA MAS AGARRE ESTE CACHITO PARA RENDERIZAR EL USERINFO Y VER SI FUNCIONABA CORRECTAMENTE EL PROP 
  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <ScrollView>
        <Userinfo user={user} />
      </ScrollView>
    </>
  );
}
