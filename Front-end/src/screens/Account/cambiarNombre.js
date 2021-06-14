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

export default function cambiarNombre() {
  const [ user, setUser ] = useState(false);
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
      user.name = formValue.name
      try {
        const response = await updateUser(user);
        //console.log(response)
        if (response.message == "0") {
          Toast.show('Error al cambiar', Toast.LONG);
        } else {
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem("@user", jsonValue);
          Toast.show('Bien', Toast.LONG);
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
        label="Nombre"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <Button
        mode="contained"
        style={formStyle.btnSucces}
        onPress={formik.handleSubmit}
      //loading={loading}
      >
        Cambiar nombre completo
      </Button>
    </View>
  );
}


//funcion para poner valores por defecto en el formulario
function initialValues() {
  return {
    name: "",
  };
}
//funcion para validar los campos
function validationSchema() {
  return {
    name: Yup.string().required(true),
  };
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
