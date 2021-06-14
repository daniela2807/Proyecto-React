import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";
import { updateUser } from '../../api/user'
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from '../../context/AuthContext'

export default function cambiarContrasena() {
  const [ user, setUser ] = useState(false);
  const { singOut } = React.useContext(AuthContext); //para cerrar sesión

  // simpre que entremos a cambiar nombre estara checando si hay cambios o no
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const jsonValue = await AsyncStorage.getItem("@user");
        setUser(JSON.parse(jsonValue))
        await formik.setFieldValue("name", JSON.parse(jsonValue).name);
        //console.log("user en cambiando nombre",JSON.parse(jsonValue).email)
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      //setLoading(true);
      user.password = formValue.password
      try {
        const response = await updateUser(user);
        //console.log(response)
        if (response.message == "0") {
          Toast.show('Error al cambiar', Toast.LONG);
        } else {
          Toast.show('Bien', Toast.LONG);
          singOut();
        }
      } catch (e) {
        console.log(e);
      }
     // setLoading(false);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Password"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
       <TextInput
        label="Confirmar Password"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("password2", text)}
        value={formik.values.password2}
        error={formik.errors.password2}
      />
      <Button
        mode="contained"
        style={formStyle.btnSucces}
        onPress={formik.handleSubmit}
      //loading={loading}
      >
        Cambiar Password
      </Button>
    </View>
  );
}


//funcion para poner valores por defecto en el formulario
function initialValues() {
  return {
    password: "",
    password2:""
  };
}
//funcion para validar los campos
function validationSchema() {
  return {
    password: Yup.string().required(true).min(6),
    password2: Yup.string().required(true).oneOf([Yup.ref("password")])
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
