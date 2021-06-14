import React, { useCallback, useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Caption } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";
import { updateUser } from '../../api/user'
import Toast from 'react-native-simple-toast';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AuthContext} from '../../context/AuthContext'

export default function cambiarEmail() {
  const [ user, setUser ] = useState(false);
  const { singOut } = React.useContext(AuthContext); //para cerrar sesión

  // simpre que entremos a cambiar nombre estara checando si hay cambios o no
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const jsonValue = await AsyncStorage.getItem("@user");
        setUser(JSON.parse(jsonValue))
        await formik.setFieldValue("email", JSON.parse(jsonValue).email);
        //console.log("user en cambiando nombre",JSON.parse(jsonValue).email)
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      //setLoading(true);
      user.email = formValue.email
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
        label="Email"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Button
        mode="contained"
        style={formStyle.btnSucces}
        onPress={formik.handleSubmit}
      //loading={loading}
      >
        Cambiar Email
        
      </Button>
      <Caption>Se cerrara sesion</Caption>
    </View>
  );
}


//funcion para poner valores por defecto en el formulario
function initialValues() {
  return {
    email: "",
  };
}
//funcion para validar los campos
function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
