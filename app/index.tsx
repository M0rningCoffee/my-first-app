import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    const [count, setCount] = useState(0);
    const STARVALUE = 0

    function alterarCount (value:number){
        setCount(count + value);
    }


    return (
        <View>
            <Text>Hello Word</Text>
            <Text>Contador= {count}</Text>
            <Button title="Jogar!" onPress={() => {alterarCount(+1)}}/> 
            <Button title="Diminuir" onPress={() => {alterarCount(-1)}}/> 
            <Button title="Reset" onPress={() => {setCount(STARVALUE)}}/>

           <CustomButton title="Rebeka"/>
        </View>
    );
}