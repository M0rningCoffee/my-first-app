import React from "react";
import {Slot, Tabs} from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function Layout (){ 
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen 
                name = 'index'
                options={{
                    title:'inicio',
                    tabBarIcon: ({color, size }) => <Ionicons name ='home-outline' size = {size} color ={color}/>
                }}
                />
                  <Tabs.Screen 
                name = 'about'
                options={{
                    title:'Sobre',
                    tabBarIcon: ({color, size }) => <Ionicons name ='information-outline' size = {size} color ={color}/>
                }}
                />
                  <Tabs.Screen 
                name = 'Settings'
                options={{
                    title:'Configurações',
                    tabBarIcon: ({color, size }) => <Ionicons name ='settings-outline' size = {size} color ={color}/>
                }}
                />
                  <Tabs.Screen 
                name = 'credits'
                options={{
                    title:'Creditos',
                    tabBarIcon: ({color, size }) => <Ionicons name ='credits-outline' size = {size} color ={color}/>
                }}
                />
                
                 <Tabs.Screen 
                name = 'Files'
                options={{
                    title:'Pastas',
                    tabBarIcon: ({color, size }) => <Ionicons name ='files-outline' size = {size} color ={color}/>
                }}
                />
        </Tabs>
    )
}
  

