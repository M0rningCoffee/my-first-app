import { uselocalSearchParams } from "expo-router";
import  React from "react";
import { Text, View } from "react-native";

export default function Detail(){
    const { id } = uselocalSearchParams(); // obtem ID de url 
    return (
      <View>
            <Text>Detalhe: {id}</Text>
      </View>  
    );
}