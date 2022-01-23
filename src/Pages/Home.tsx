import React from "react"
import {View, Text} from "react-native"
import { SettingsIcon, PlayIcon, ResetIcon } from "../assets/icons"

export default function Home({navigation}: {navigation: any}){
  return(
    <View style={{flex:1, backgroundColor:"#000000", paddingVertical:"10%", paddingHorizontal:10}}>

      <View style={{height:"45%", backgroundColor:"#FFFFFF", borderRadius:20, justifyContent:"center", alignItems:"center",transform: [{ rotate: '180deg'}]}}>
          <Text style={{color:"#000000", fontSize:72,}}>10:00</Text>
          <Text style={{color:"#000000"}}>0 MOVES</Text>
      </View>
      <View style={{height:"10%", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        <SettingsIcon onPress={()=> navigation.navigate("setting")}/>
        <PlayIcon/>
        <ResetIcon/>
      </View>

      <View style={{height:"45%", backgroundColor:"#FFFFFF", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#000000", fontSize:72,}}>10:00</Text>
          <Text style={{color:"#000000"}}>0 MOVES</Text>
      </View>
    
    </View>
  )
}