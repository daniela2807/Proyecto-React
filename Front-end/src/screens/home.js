import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function home() {
    return (
        <View style={styles.container}>
            <Text>Estamos en HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})