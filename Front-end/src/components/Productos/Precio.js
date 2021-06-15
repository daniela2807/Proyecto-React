import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Precio(props) {
  const { precio } = props;

  return (
    <>
      <View style={styles.containerData}>
        <Text style={styles.dataText}>Precio regular: </Text>
        <Text style={styles.dataValue}>${precio}</Text>
      </View>
      <View style={styles.containerData}>
        <Text style={styles.dataDisc}>Sin descuento</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerData: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  dataText: {
    width: "45%",
    fontSize: 21,
    color: "#747474",
    textAlign: "right",
  },
  dataValue: {
    width: "55%",
    fontSize: 21,
    paddingLeft: 5,
    color: "#bc0e0d",
  },
  dataDisc: {
    width: "42%",
    fontSize: 21,
    color: "#747474",
    textAlign: "right",
  },
});
