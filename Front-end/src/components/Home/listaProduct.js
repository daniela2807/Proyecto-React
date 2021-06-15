import React from "react";
import { View, Image, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { map } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function listaProduct(props) {
  const { products } = props;
  const navigation = useNavigation();

  const iraProducto = (id) => {
    navigation.push("producto", {idProducto: id})//se pone push para ir actualizando la imagen cada vez que se pinche un producto si no solo se veria el primero producto pinchado
  };

  
  return (
    <View style={styles.container}>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product.id}
          onPress={() => iraProducto(product.id)}
        >
          <View style={styles.containerProd}>
            <View style={styles.producto}>
              <Image style={styles.imagenes} source={{uri: (product.img) }} />
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {product.name}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    margin: -3,
  },
  containerProd: {
    width: "50%",
    padding: 3,
  },
  producto: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  name: {
    marginTop: 15,
    fontSize: 18,
  },
  imagenes: {
    height: 150,
    resizeMode:"contain",
  },
});
