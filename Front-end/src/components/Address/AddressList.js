import React from 'react'
import {StyleSheet,Alert, View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import {map} from 'lodash'

export default function AddressList(props){
const {dires} = props

    return(
        <View style = {styles.container}>
            {map(dires,(direc) => (
                <Text>Hola</Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
})