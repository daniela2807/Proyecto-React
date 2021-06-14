import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { formStyle } from '../../styles'
import { useFormik } from 'formik'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Yup from "yup";
import {createAddress} from '../../api/address'

export default function AddAddress() {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(false);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const jsonValue = await AsyncStorage.getItem("@user");
                setUser(JSON.parse(jsonValue))
                await formik.setFieldValue("id_user", JSON.parse(jsonValue).id);
            })();
        }, [])
    );

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            try{
                await createAddress(formData)
                navigation.goBack();
            }catch(err){
                console.log(err)
            }
            setLoading(false)
        }
    })

    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={style.container}>
                <Text style={style.title}>Nueva direccion</Text>
                <TextInput label="Calle" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("street", text)}
                    value={formik.values.street}
                    error={formik.errors.street} />
                <TextInput label="Numero" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("number", text)}
                    value={formik.values.number}
                    error={formik.errors.number} />
                <TextInput label="Telefono" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("phone", text)}
                    value={formik.values.phone}
                    error={formik.errors.phone} />
                <TextInput label="Codigo Postal" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("cp", text)}
                    value={formik.values.cp}
                    error={formik.errors.cp} />
                <TextInput label="Colonia" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("neighborhood", text)}
                    value={formik.values.neighborhood}
                    error={formik.errors.neighborhood} />
                <TextInput label="Estado" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("city", text)}
                    value={formik.values.city}
                    error={formik.errors.city} />
                <TextInput label="Pais" style={formStyle.input} onChangeText={(text) => formik.setFieldValue("country", text)}
                    value={formik.values.country}
                    error={formik.errors.country} />
                <Button mode="contained" style={formStyle.btnSucces, style.btnSucces}
                    onPress={formik.handleSubmit} loading={loading}>
                    Crear Direccion
                </Button>
            </View>
        </KeyboardAwareScrollView>
    );
}

function initialValues() {
    return {
        id_user: "",
        street: "",
        phone: "",
        number: "",
        cp: "",
        neighborhood: "",
        city: "",
        country: ""
    }
}

function validationSchema() {
    return {
        id_user: Yup.string().required(),
        street: Yup.string().required(),
        phone: Yup.string().required(),
        number: Yup.string().required(),
        cp: Yup.string().required(),
        neighborhood: Yup.string().required(),
        city: Yup.string().required(),
        country: Yup.string().required()
    };
}


const style = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        paddingVertical: 20
    },
    btnSucces: {
        marginBottom: 20
    }
})