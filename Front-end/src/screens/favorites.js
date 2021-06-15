import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from 'react-native'
import StatusBar from "../components/StatusBar"
import colors from '../styles/colors';
import Search from '../components/Auth/Search'
import {AuthContext} from '../context/AuthContext'
import { getFavorites } from '../api/favorite'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export default function favorites() {
    const [products, setProducts] = useState(null);
    const {getUser} = React.useContext(AuthContext);  

    useFocusEffect(
        useCallback(() => {
          (async () => {
              const userlog = await getUser()
             // console.log("unde",userlog)
              // console.log(userlog)
               const product = await getFavorites(userlog)
               console.log(product);
               setProducts(product)
              // console.log(dire)
              //console.log("hola"+  JSON.stringify(direcs))
          })();
        }, [])
      );
    


    return (
        <>
        <StatusBar backgroundColor = {colors.bgDark} bartStyle = "light-content"/>
        <Search/>
        <View style={styles.container}>
            <Text>Estamos en favorites</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }


})