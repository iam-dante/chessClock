import React from "react"
import {View, Text} from "react-native"
import { AddIcon, BackIcon, ClockIcon, ColorWatch } from "../assets/icons"

export default function Settings({navigation}:{navigation:any}){
    return(
        <View style={{position:"relative",flex:1, backgroundColor:"#FFFFFF"}}> 
            <View style={{position:"relative",height:80,   paddingHorizontal:18, justifyContent:"center",}}>
                <View style={{flexDirection:"row", alignItems:"center"}} >
                    <BackIcon onPress={()=>navigation.goBack()}/>
                    <Text style={{marginLeft:12, fontSize:20,color:"black"}}>SETTINGS</Text>
                </View>
                <ColorWatch style={{position: "absolute", right:18}}/>
            </View>
            <View style={{flex: 1, paddingHorizontal:18, paddingTop:16}}>
                <View style={{height:100, backgroundColor:"#F5F5F5", borderRadius: 6, alignItems:"center", flexDirection:"row", paddingHorizontal:22, elevation:1}}>
                    <ClockIcon/>
                    <View style={{marginLeft:18, height:70, justifyContent:"space-evenly"}} >
                        <Text style={{fontSize:18,color:"black"}}>NAME TOURNAMENT</Text>
                        <Text style={{fontSize:18, color:"black"}}>10MS Vs 10MS</Text>
                    </View>
                </View>
            </View>

            <AddIcon style={{position:"absolute", bottom:20, right:18}} onPress={()=> console.log("cliked button")}/>
        </View>
    )
}
