import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
export default function Buy(props) {
  const { product, cantidad } = props;
  const addProducto = () => {
    console.log("producto añadido al carrito");
     console.log(product.name);
     console.log("cantidad: " + cantidad);
  };
  //con el onpress te manda el nombre del producto y te manda la cantidad de 1 por default
  return (
    <View style={{zIndex:1}}>
      <Button
        onPress={addProducto}
        mode="contained"
        contentStyle={styles.btnBuy}
        labelStyle={styles.btnLabel}
        style={styles.btn}
      >
        Añadir al carrito
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  btnBuy: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
});
