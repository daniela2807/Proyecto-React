
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Toast from 'react-native-simple-toast';
import {addFavorites} from '../../api/favorite'
import {AuthContext} from '../../context/AuthContext'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export default function Favoritos(props) {
  const { product } = props;
  const [userLog, setUserLog] = useState(null);
  const {getUser} = React.useContext(AuthContext);  
  //console.log("props",product)
  const addFavoritos = async () => {
    console.log(userLog)
    console.log(product.id)
    await addFavorites(userLog,product.id)
    Toast.show('Añadido a favoritos',Toast.LONG);
  };

  useFocusEffect(
    useCallback(() => {
      (async () => {
          const userlo = await getUser()
          setUserLog(userlo)
      })();
    }, [])
  );

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
