<<<<<<< HEAD
import React ,{useState,useCallback}from 'react'
import { StyleSheet, View, Text } from 'react-native'
import StatusBar from "../components/StatusBar"
import colors from '../styles/colors';
import Search from '../components/Auth/Search'
import {size} from 'lodash'
import {AuthContext} from '../context/AuthContext'
import ScreenLoading from '../components/ScreenLoading'
import { getFavorites } from '../api/favorite'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import FavoriteList from '../components/Favorites/FavoriteList'

export default function favorites() {
    const [products, setProducts] = useState(null);
    const {getUser} = React.useContext(AuthContext);  

    useFocusEffect(
        useCallback(() => {
          (async () => {
              const userlog = await getUser()
               const product = await getFavorites(userlog)
               if(product == null){
                    setProducts([])
               }else{
               setProducts(JSON.parse(JSON.stringify(product)).products)
               }
          })();
        }, [])
      );
    


    return (
        <>
        <StatusBar backgroundColor = {colors.bgDark} bartStyle = "light-content"/>
        <Search/>
        {!products ? (
            <ScreenLoading text = "Cargando Lista"/>
        ): size(products) === 0 ? (
            <View style={styles.container}>
                <Text style = {styles.title}>Lista de Favoritos</Text>
                <Text>No tienes productos en tu lista</Text>
            </View>
        ):(
            <FavoriteList products={products}/>
        )}
        </>
=======
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function favorites() {
    return (
        <View style={styles.container}>
            <Text>Estamos en favorites</Text>
        </View>
>>>>>>> 43c780098e99e61ac06981e7a2d23db73e2e60aa
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical:20,
        paddingHorizontal:10
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:5
    }


})