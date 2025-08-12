import React, { useEffect, useState } from "react";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import socket from "@/socket/socket";


export default function Socket() {
    const roomPrefix = 'chat';

    // Form 1
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState ('');

     // Form 2
    const [message2, setMessage2] = useState('');
    const [receivedMessage2, setReceivedMessage2] = useState ('');

    useEffect (()=> {
        socket.emit('join_room', 'chat-1');
        socket.emit('join_room', 'chat-2' );

        socket.on('receive_message', (Response:{
            room: string, msg: string
        }) => {
            console.log(Response);
            if (Response.room === 'chat-2'){
                setReceivedMessage(Response.msg);
            } else if (Response.room === 'chat-2'){
                setReceivedMessage2(Response.msg);
            }
        });
        return () => { socket.off('receive_message');};
    },[]);
    const sendMessage = (chat: string) => {
        const targetRoom = `${roomPrefix}-${chat}`;
        const msg = chat ==='1' ? message : message2;

        socket.emit('send_message', {
            room: targetRoom, message: msg
        })
if (chat === '1') {
    setMessage('');
} else {
    setMessage2('');
}    
    };
return (
        <View></View>
    );
}