import React from "react";
import { Alert } from "react-native";
import { List } from "react-native-paper";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function menu() {
  const navigation = useNavigation(); //para navegar entre pantallas
  const { singOut } = React.useContext(AuthContext); //para cerrar sesión

  const logoutA = () => {
    //alerta que pregunta si quiere salir
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de que quieres salir de tu cuenta?",
      [
        {
          text: "NO",
        },
        {
          text: "SI",
          onPress: () => singOut(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        <List.Item
          title="Cambiar nombre"
          description="Cambia el nombre de tu cuenta"
          left={(props) => <List.Icon {...props} icon="face" />} //para poner el icono a la izquierda
          onPress={() => console.log("cambiando nombre")}
        />
        <List.Item
          title="Cambiar email"
          description="Cambia el email de tu cuenta"
          left={(props) => <List.Icon {...props} icon="at" />} //para poner el icono a la izquierda
          onPress={() => console.log("cambiando email")}
        />
        <List.Item
          title="Cambiar contraseña"
          description="Cambia la contraseña de tu cuenta"
          left={(props) => <List.Icon {...props} icon="key" />} //para poner el icono a la izquierda
          onPress={() => console.log("cambiando contraseña")}
        />
        <List.Item
          title="Mis direcciones"
          description="Administra tus direcciones de envio"
          left={(props) => <List.Icon {...props} icon="map" />} //para poner el icono a la izquierda
          onPress={() => console.log("ir a direcciones")}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title="Pedidos"
          description="Listado de todos los pedidos"
          left={(props) => <List.Icon {...props} icon="clipboard-list" />}
          onPress={() => console.log("ir a mis pedidos")}
        />
        <List.Item
          title="Lista de deseos"
          description="Listado de todos los productos que quieres comprar"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate("favorites")}
        />
        <List.Item
          title="Cerrar sesión"
          description="Vuelve pronto"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={logoutA}
        />
      </List.Section>
    </>
  );
}
