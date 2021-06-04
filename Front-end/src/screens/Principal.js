import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native'
import { TextInput, Button} from 'react-native-paper'
import {AuthContext} from '../context/AuthContext'

export default function Principal(){
    const {singOut} = React.useContext(AuthContext);

    return(
        <View>
            <Text>Pantalla principal</Text>
            <Text>Pantalla principal</Text>
            <Text>Pantalla principal</Text>
            <Button mode="text" 
                onPress={() => {singOut()}}>LogOut</Button>
        </View>
    )
}

const styles = StyleSheet.create({

    logo:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginBottom:20
    }
})