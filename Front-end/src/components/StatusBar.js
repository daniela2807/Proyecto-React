import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

export default function StatusBarCustom(props) {
    const {backgroundColor, ...rest} = props;

    return (
        <>
        <StatusBar backgroundColor={backgroundColor} {...rest}/>
        {/* protege el area segura de arriba de la pantalla */}
        <SafeAreaView 
            style={{
                flex: 0,
                backgroundColor: backgroundColor,
            }}
        />
        </>
    )
}
