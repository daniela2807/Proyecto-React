import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { map } from "lodash"
import ScreenLoading from "../../components/ScreenLoading";
import { getOneProductApi } from "../../api/product"
import Product from '../../components/Cart/Products'

export default function ProductList(props) {
    const { cart, products, setProducts } = props;
    //console.log(cart)
    useEffect(() => {
        setProducts(null);
        (async () => {
            const producTemp = [];

            for await (const product of cart) {
                const response = await getOneProductApi(product.idProduct)
                response.quantity = product.quantity
                producTemp.push(response)
            }
            setProducts(producTemp)
            //console.log(producTemp[0].quantity)
        })()
    }, [])

    console.log(products)

    return (
        <View>
            <Text style={styles.title}>Productos:</Text>
            {!products ? (
                <ScreenLoading text="Cargando carrito" size="large" />
            ) : (
                map(products, (product) => 
                    <Product key ={product.id} product = {product}/>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})