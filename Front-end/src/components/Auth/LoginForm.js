import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {TextInput, Button} from "react-native-paper"
import {formStyle} from '../../styles'
import Toast from 'react-native-simple-toast';
import {useFormik} from 'formik'
import {loginApi} from '../../api/user'
import * as Yup from "yup";

export default function LoginForm(props){
    const {changeForm} = props;
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(ValidationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try{
                const response = await loginApi(formData);
                console.log(response)
                if(response.message == "0") {
                    Toast.show('Error al ingresar', Toast.LONG);
                }else{
                    Toast.show('Bien', Toast.LONG);
                }

            }catch(error){
                Toast.show('Error al ingresar', Toast.LONG);
                setLoading(false);
            }
            
        }
    })
    return(
        <View>
            <TextInput label="Email" style={formStyle.input} 
            onChangeText={(text)=> formik.setFieldValue("email",text)}
            value={formik.values.email}
            error={formik.errors.email}/>
            <TextInput label="Contraseña" style={formStyle.input}
             onChangeText={(text)=> formik.setFieldValue("password",text)}
             value={formik.values.password}
             error={formik.errors.password} secureTextEntry/>
            <Button mode="contained" style={formStyle.btnSucces}
            onPress={formik.handleSubmit} disabled={!formik.isValid}
            loading= {loading}>Entrar</Button>
            <Button mode="text" style={formStyle.btnText} labelStyle= {formStyle.btnTextLabel}
            onPress={changeForm} >Registrarse</Button>
        </View>
    )
}

function initialValues(){
    return{
        email: "",
        password: ""
    }
}

function ValidationSchema(){
    return{
        email: Yup.string().email().required(true),
        password: Yup.string().min(6).required(true),
    }
}