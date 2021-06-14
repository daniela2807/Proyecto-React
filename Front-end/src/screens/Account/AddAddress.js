import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { formStyle} from '../../styles'

export default function AddAddress(){
    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style = {style.container}>
            <Text style = {style.title}>Nueva direccion</Text>
            <TextInput label = "Calle" style = {formStyle.input}/>
            <TextInput label = "Numero" style = {formStyle.input}/>
            <TextInput label = "Telefono" style = {formStyle.input}/>
            <TextInput label = "Codigo Postal" style = {formStyle.input}/>
            <TextInput label = "Colonia" style = {formStyle.input}/>
            <TextInput label = "Estado" style = {formStyle.input}/>
            <TextInput label = "Pais" style = {formStyle.input}/>
            <Button mode = "contained" style={formStyle.btnSucces}>
                Crear Direccion
            </Button>
            </View>
        </KeyboardAwareScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal:20,
    },
    title: {
        fontSize: 20,
        paddingVertical:20
    }
})