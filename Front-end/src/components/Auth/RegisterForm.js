import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button} from 'react-native-paper'
import { formStyle } from '../../styles'
import { useFormik } from 'formik'
import { registerApi} from '../../api/user'

import * as Yup from 'yup';

export default function RegisterForm(props) {
    const { changeForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            try{
                await registerApi(formData);
                console.log("Ok");
            }catch(error){
                console.log(error)
            }
        }
    })
    return (
        <View>
            <TextInput
                label="Email"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("email", text)} 
                value = {formik.values.email}
                error={formik.errors.email} />
            <TextInput label="Nombre de Usuario" style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                value = {formik.values.name}
                error={formik.errors.name} />
            <TextInput label="Contraseña" style={formStyle.input} secureTextEntry
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value = {formik.values.password}
                error={formik.errors.password} />
            <TextInput label="Confirmar Contraseña" style={formStyle.input} secureTextEntry
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                value = {formik.values.repeatPassword}
                error={formik.errors.repeatPassword} />

            <Button mode="contained" style={formStyle.btnSucces} onPress={formik.handleSubmit}>Registrarse</Button>
            <Button mode="text" style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                onPress={changeForm}>Iniciar sesion</Button>
        </View>
    )
}

function initialValues() {
    return {
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
    }
}

function validationSchema() {
    return {
        email: Yup.string().email(true).required(true),
        name: Yup.string().required(true),
        password: Yup.string().required(true).min(6),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")])
};
}