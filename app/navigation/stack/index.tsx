import { router, useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function optionsHome(){
    const router = useRouter()
    return (
        <View>
            estou na tela de opções

            <Button title="Ir para detalhes" onPress={() => router.push('/navigation/stack/details')}/>
        </View>
    )
    
}