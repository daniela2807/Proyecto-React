import React, {useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { getLastProductsApi } from"../../api/product"; 
import ListaProduct from "./listaProduct";

export default function NuevosProduc() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async()=>{
            const response = await getLastProductsApi();
            setProducts(response);
            //console.log(products)
        })()
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nuevos productos</Text>
            {products && <ListaProduct products={products}/>}
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop:20,
    },
    title: {
        fontWeight: "bold",
        fontSize:20,
        marginBottom:10,
    }

})