import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native'
import logo from "../../assets/logo.jpg"
import {layoutStyle} from '../styles'
import RegisterForm from '../components/Auth/RegisterForm'

export default function Auth(){
    const [showLogin, setshowLogin] = useState(false);

    const changeForm = () => setshowLogin(!showLogin);
    return(
        <View style = {layoutStyle.container}>
            <Image style={styles.logo} source={logo}/>
            <KeyboardAvoidingView>
            {showLogin? <Text>Form Login</Text> : <RegisterForm changeForm={changeForm}/>}
            </KeyboardAvoidingView>
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