import React, { useCallback, useState } from "react";
import { StyleSheet, ScrollView, View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAdressesApi } from '../../api/address'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {size} from 'lodash'
import AddressList from '../../components/Address/AddressList'
import {AuthContext} from '../../context/AuthContext'

export default function Adresses() {
    //const [user, setUser] = useState(false);
    const [dire, setDire] = useState(null)
    const navigation = useNavigation()
    const {getUser} = React.useContext(AuthContext);  
    useFocusEffect(
        useCallback(() => {
          (async () => {
              const userlog = await getUser()
              console.log("unde",userlog)
               console.log(userlog)
               const direcs = await getAdressesApi(userlog)
               console.log(direcs);
               setDire(direcs)
              // console.log(dire)
              //console.log("hola"+  JSON.stringify(direcs))
          })();
        }, [])
      );
    

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mis direcciones</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("add-address")}>
                <View style={styles.addAdress}>
                    <Text style={styles.addAdressText}>Añadir una nueva direccion</Text>
                    <IconButton icon="arrow-right" color="#000" size={19} />
                </View>
            </TouchableWithoutFeedback>
            {!dire ? (
                <ActivityIndicator size = "large" style={styles.loading}/>
            ): size(dire) === 0 ? (
                <Text style = {styles.noAddressText}>Crea tu primera direccion</Text>
            ) : (
                <AddressList addresses = {dire}/>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20
    },
    addAdress: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    addAdressText: {
        fontSize: 16
    },
    loading:{
        marginTop: 20
    },
    noAddressText:{
        fontSize: 16,
        marginTop: 10,
        textAlign: "center"
    }
})