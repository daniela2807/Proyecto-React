import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, ScrollView, View } from "react-native";
import { getOneProductApi } from "../../api/product";
import Search from "../../components/Auth/Search";
import ScreenLoading from "../../components/ScreenLoading";
import StatusBar from "../../components/StatusBar";
import colors from "../../styles/colors";
import Precio from "../../components/Productos/Precio";
import Cantidad from "../../components/Productos/Cantidad";
import Buy from "../../components/Productos/Buy";
import Favoritos from "../../components/Productos/Favoritos";
export default function Producto(props) {
  const { route } = props;
  const { params } = route;
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await getOneProductApi(params.idProducto);

      setProduct(response);
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barstyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{product.name}</Text>
          <Image style={styles.imagenes} source={{ uri: product.img }} />
          <View style={styles.containerView}>
            <Precio precio={product.cost} />
            <Cantidad cantidad={cantidad} setCantidad={setCantidad} />
            <Buy product={product} cantidad={cantidad}/>
            <Favoritos product={product} />
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 50,
  },
  imagenes: {
    height: 350,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  containerView: {
    padding: 10,
  },
});
