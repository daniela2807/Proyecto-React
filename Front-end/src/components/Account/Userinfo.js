import React from "react";
import { View, Text, StyleSheet } from "react-native";

//EN ESTE COMPONENTE SE RENDERIZA LA INFO DEL USUARIO CON EL PROP USER CLARO NO FUNCIONA POR QUE AUN NO TENEMOS ESA INFO
//PERO YA QUE TENGAMOS ESA INFO FUNCIONARA CORRECTAMENTE LO QUE ESTA COMENTADO

export default function Userinfo(props) {
  const { user } = props;
  const info = "no tenemos aun la info del usuario";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido,</Text>
      <Text style={styles.titleName}>
        {/* {user.name && user.lastname ? `${user.name} ${user.lastname}` 
                : user.email} aun no tenemos estos datos por eso esta comentado*/}
        {info}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  titleName: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
