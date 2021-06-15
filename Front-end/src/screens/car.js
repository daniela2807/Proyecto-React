import React , {useState, useCallback} from 'react'
import { StyleSheet,ScrollView, View, Text } from 'react-native'
import StatusBar from '../components/StatusBar'
import {size} from 'lodash'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import NotProducts from '../components/Cart/NoProducts'
import colors from "../styles/colors";
import {useFocusEffect} from "@react-navigation/native"
import { getProductCartApi } from '../api/cart';
import ProductList from '../components/Cart/ProducList'
import ScreenLoading from "../components/ScreenLoading"

export default function car() {
    const [cart, setCart] = useState(null)
    const [products, setProducts] = useState(null)

    useFocusEffect(
        useCallback(()=>{
            setCart(null)
            loadCart()
        },[])
    )

    const loadCart = async() => {
        const response = await getProductCartApi();
        setCart(response)
        //console.log(response);
    }
    return (
        <>
            <StatusBar backgroundColor ={colors.bgDark} barStyle="light-content"/>
             {!cart && size(cart) === 0 ? (
                <NotProducts/>
             ) : (
                <KeyboardAwareScrollView extraScrollHeight={25}>
                    <ScrollView style = {styles.cartContainer}>
                        <ProductList cart = {cart} products={products} setProducts={setProducts}/>
                    </ScrollView>
                </KeyboardAwareScrollView>
             )}
        </>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        padding:10
    }
})