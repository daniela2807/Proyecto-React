import React from 'react'
import { StyleSheet, Alert, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { map } from 'lodash'
import colors from '../../styles/colors'
import {deleteAdressesApi} from '../../api/address'

export default function AddressList(props) {
    const { addresses } = props

    const deleteAddressAlert = (address) => {
        console.log(address);
        Alert.alert(
            "Eliminando direccion",
            "¿Estas seguro de que deseas eliminar la direccion?",
            [
                {
                    text: "NO"
                }, {
                    text: "SI",
                    onPress: () => deleteAdresses(address.id)
                },
            ],
            { cancelable: false }
        )
    }

    const deleteAdresses = async (idAddress) => {
        try{
            console.log(idAddress);
            await deleteAdressesApi(idAddress);
        }catch(error){
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            {map(addresses, (address) => (
                <View key={address.id} style={styles.address}>
                    <Text style={styles.title}>Calle: {address.street} # {address.number}</Text>
                    <Text style={styles.title}>Tel: {address.phone}</Text>
                    <View style={styles.blockLine}>
                        <Text>{address.cp}, </Text>
                        <Text>{address.city}, </Text>
                        <Text>{address.neighborhood} </Text>
                    </View>
                    <Text>{address.country} </Text>
                    <View style={styles.actions}>
                        <Button onPress={() => deleteAddressAlert(address)} color={colors.primary} mode="contained">Eliminar</Button>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    address: {
        borderWidth: 0.9,
        borderRadius: 5,
        borderColor: "#ddd",
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom: 15
    },
    title: {
        fontWeight: "bold",
        paddingBottom: 5
    },
    blockLine: {
        flexDirection: "row"
    },
    actions: {
        flexDirection: "row",
        marginTop: 30
    }
})