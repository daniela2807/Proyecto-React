import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { API_URL } from '../../utils/constants';
import colors from "../../styles/colors"
import { useNavigation, useFocusEffect} from '@react-navigation/native'
import {AuthContext} from '../../context/AuthContext'
import Toast from 'react-native-simple-toast';
import {deleteFavorites} from '../../api/favorite'

export default function Product(props) {

    const { product } = props;
    const [userLog, setUserLog] = useState(null);
    const {getUser} = React.useContext(AuthContext);  
    const navigation = useNavigation();
    //console.log("Producto", product)
    const goToProduct = (id) => {
        //console.log(id)
        navigation.navigate("producto",{idProducto:id})
    }

    const deleteFavoritos = async () => {
        console.log(userLog)
        console.log(product.id)
        await deleteFavorites(userLog,product._id)
        Toast.show('Eliminando de favoritos',Toast.LONG);
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
        <View style={styles.product}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: (product.img) }} />
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">{product.name}
                    </Text>
                    <View style={styles.price}>
                        <Text style={styles.currentPrice}>
                            $ {product.cost}
                        </Text>
                    </View>
                </View>
                <View style={styles.btnsContainer}>
                    <Button  style={styles.btnProduct} mode="contained" color={colors.primary} onPress={()=>goToProduct(product._id)}>Ver Producto</Button>
                    <IconButton onPress={deleteFavoritos} icon="close" color="#fff" size={16} style={styles.btnDelete}></IconButton>
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
    containerImage: {
        width: "40%",
        height: 150,
        backgroundColor: "#ebebeb",
        padding: 5
    },
    image: {
        height: "100%",
        resizeMode: "contain"
    },
    info: {
        padding: 10,
        width: "60%",
        justifyContent: "space-between"
    },
    name: {
        fontSize: 16
    },
    prices: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "flex-end"
    },
    currentPrice: {
        fontSize: 22
    },
    btnsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        width: "100%"

    },
    btnDelete: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 0,
        width: 50,
        height: 32
    },
    btnProduct:{
        width: 150,
        height: 32
    }
})