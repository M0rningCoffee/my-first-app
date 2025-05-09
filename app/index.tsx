import Form from "@/components/CustomForm";
import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
    const name = "Gabriel";

    const [count, setCount] = useState(0);
    const [nome, setNome] = useState(name);
    const STARVALUE = 0

    

    function alterarCount (value:number){
        setCount(count + value);
    }


    return (
        <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Text>Bem vindo, {nome} </Text>

            <Text>Contador: {count}</Text>
            <Button title="Jogar!" onPress={() => {alterarCount(+1)}}/> 
            <Button title="Diminuir" onPress={() => {alterarCount(-1)}}/> 
            <Button title="Reset" onPress={() => {setCount(STARVALUE)}}/>

            <TextInput placeholder="digita ai mano" onChangeText={setNome}/>
           <CustomButton title="Bota Vermeia" onPress={() => {setNome('Gabs ' + count)}}/>


           
            <TextInput placeholder="Nome"/>
            <CustomButton title="Login" onPress={() => {setNome('Gabs ' + count)}}/>
            
            
        </View>
    );
}