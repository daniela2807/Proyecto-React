import React from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Cantidad(props) {
  const { cantidad, setCantidad } = props;
  return (
    <View style={{zIndex:2}}>
      <DropDownPicker
        items={[
          {
            label: "1",
            value: 1,
          },
          {
            label: "2",
            value: 2,
          },
          {
            label: "3",
            value: 3,
          },
        ]}
        defaultValue={cantidad}
        containerStyle={styles.containerCant}
        itemStyle={styles.itemStyle}
        dropDownStyle={styles.dropDownPicker}
        style={styles.dropDownPicker}
        labelStyle={styles.labelS}
        onChangeItem={(item) => setCantidad(item.value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerCant: {
    height: 40,
    width: 100,
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  dropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelS: {
    color: "#000",
  },
});
