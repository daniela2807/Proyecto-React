import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button} from 'react-native-paper'
import { formStyle } from '../../styles'
import { useFormik } from 'formik'
import { registerApi} from '../../api/user'
import Toast from 'react-native-simple-toast';
import {AuthContext} from '../../context/AuthContext'
import * as Yup from 'yup';

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);

    const {signUp} = React.useContext(AuthContext);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object().shape(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try{
                const response = await registerApi(formData);
                if(response.message == "0") {
                    Toast.show('Error al ingresar', Toast.LONG);
                }else{
                    console.log(response.data);
                    signUp(response.data, response.token)
                    Toast.show('Bien',Toast.LONG);
                }

            }catch(error){
                setLoading(false);
                 Toast.show('Error al registrar usuario',Toast.LONG);
                console.log(error)
            }
            setLoading(false);
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
            <TextInput label="Nombre" style={formStyle.input}
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

            <Button mode="contained" style={formStyle.btnSucces} onPress={formik.handleSubmit}
            loading={loading} disabled={!formik.isValid}>Registrarse</Button>
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