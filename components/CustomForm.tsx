import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    form: string;
    onPress: ()=> void
}



export  default function CustomForm({form, onPress}: Props){
    return(
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.text}>{form}</Text>
        </TouchableOpacity>

    )
};

const Styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})

