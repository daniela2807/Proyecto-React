import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function Favoritos(props) {
  const { product } = props;
  const addFavoritos = () => {
    console.log("producto añadido a favoritos");
    console.log(product.name);
  };

  return (
    <View style={{zIndex:1}}>
      <Button
        onPress={addFavoritos}
        mode="contained"
        contentStyle={styles.btnFavorites}
        labelStyle={styles.btnLabel}
        style={styles.btn}
      >
        Añadir a favoritos
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
  },
  btnFavorites: {
    backgroundColor: "#057b00",
    paddingVertical: 5,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
  },
});
