import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {map} from 'lodash'
import Product from './Product'

export default function FavoriteList(props){

    const {products} = props;
    console.log(products)
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style= {styles.title}>Lista de Favoritos</Text>
            {map(products,(product) =>(
                <Product key={product._id} product={product}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:20,
        paddingHorizontal:20
    },
    title:{
        fontWeight:"bold",
        fontSize: 19,
        marginBottom:5,
    }
})