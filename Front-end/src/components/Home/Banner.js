import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Coursel from "react-native-snap-carousel";
import { size } from "lodash";
import { API_URL } from "../../utils/constants";
import { getBannerApi } from "../../api/home-banner";

const width = Dimensions.get("window").width;
const height = 160;

export default function Banner() {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getBannerApi();
      //console.log("respuesta del response", response);
      setBanner(response);
    })();
  }, []);

  if (!banner) return null;
  const renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => console.log("ir al producto")}>
        <Image style={styles.carrusel} source={{ uri: item.img }} />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <View style={styles.container}>
      <Coursel
        layout={"default"}
        data={banner} 
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  carrusel: {
    width,
    height,
  },
});
