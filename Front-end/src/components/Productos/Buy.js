import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Toast from 'react-native-simple-toast';
import { addProductCartApi, getProductCartApi } from '../../api/cart'

export default function Buy(props) {
  const { product, cantidad } = props;
  console.log("buy", cantidad)
  useEffect(() => {
    (async () => {
      console.log(await getProductCartApi());
    })()
  }, [])

  const addProducto = async () => {
    const response = await addProductCartApi(product.id, cantidad)
    if (response) {
      Toast.show('Producto añadido al carrito', Toast.LONG);
    } else {
      Toast.show('Error al añadir al carrito', Toast.LONG);
    }
  };


  //con el onpress te manda el nombre del producto y te manda la cantidad de 1 por default
  return (
    <View style={{ zIndex: 1 }}>
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
