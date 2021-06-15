import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Button, IconButton } from "react-native-paper"
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors";

export default function Product(props) {
    const { product } = props
    
    return (
        <View style={styles.products}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: (product.img) }} />
            </View>
            <View style = {styles.info}>
                <View>
                    <Text style = {styles.name} numberOfLines={3} ellipsizeMode="tail">{product.name}</Text>
                  <View style = {styles.prices}>
                        <Text style = {styles.currentPrice}>$ {product.cost}</Text>
                  </View>
                </View>
                <View style = {styles.btnsContainer}>
                    <View style = {styles.selectQuantify}>
                        <IconButton icon = "plus" color = "#fff" size = {19} style={styles.btnQuantity}/>
                        <TextInput style={styles.inputQuantity} value={product.quantity.toString()}></TextInput>
                        <IconButton icon = "minus" color = "#fff" size = {19} style={styles.btnQuantity}/>
                    </View>
                    <Button color = "#b12704" mode="contained" onPress={() => console.log("Eliminar producto")}>Eliminar</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    products: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#dadde1"
    },
    containerImage: {
        width: "40%",
        height: 170,
        backgroundColor: "#ebebeb",
        padding: 5

    },
    image: {
        height: "100%",
        resizeMode: "contain"
    },
    info:{
        padding:10,
        width:"60%",
        justifyContent:"space-between"
    },
    name:{
        fontSize:16
    },
    prices:{
        flexDirection:"row",
        marginTop:5,
        alignItems: "flex-end"
    },
    currentPrice:{
        fontSize: 15,
        color:"#b12704"
    },
    btnsContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        position:"relative",
        width:"100%"
    },
    selectQuantify:{
        flexDirection:"row",
        alignItems:"center"
    },
    btnQuantity:{
        backgroundColor: colors.primary,
        borderRadius:5,
        margin:0
    },
    inputQuantity:{
        paddingHorizontal:10,
        fontSize:16
    }
})