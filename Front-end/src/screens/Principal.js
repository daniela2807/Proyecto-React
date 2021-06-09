import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native'
import { TextInput, Button} from 'react-native-paper'
import {AuthContext} from '../context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Principal(){
    const {singOut} = React.useContext(AuthContext);
    const [user, setUser] = React.useState(null);

    const getData = async() => {
        try{
          const jsonValue = await AsyncStorage.getItem('@user')
          setUser(JSON.parse(jsonValue));
          console.log("Data",JSON.parse(jsonValue));
          //console.log(JSON.parse(jsonValue));
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        }catch(e){
          console.log(e)
        }
      }
//getData();

    return(
        <View>
            <Text>Hola</Text>
            <Text >Hola</Text>
            <Text>Pantalla </Text>
            <Button mode="text" 
                onPress={() => {singOut()}}>LogOut</Button>
           <Button mode="text" 
                onPress={() => {getData()}}>GetInfoUser</Button>
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