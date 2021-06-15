import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { API_URL } from '../../utils/constants';
import colors from "../../styles/colors"

export default function Product(props) {

    const { product } = props;
    //console.log("Producto", product)
    return (
        <View style={styles.product}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: (product.img) }}/>
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={styles.name}>{product.name}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    product: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#ddd",
    },
    containerImage:{
        width:"40%",
        height:150 ,
        backgroundColor:"#ebebeb",
        padding:5
    },
    image:{
        height:"100%",
        resizeMode:"contain"
    },
    info:{
        padding:10,
        width:"60%",
        justifyContent:"space-between"
    },
    name:{
        fontSize:16
    }
})