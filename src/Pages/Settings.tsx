import React from "react"
import {View, Text} from "react-native"
import { BackIcon, ClockIcon, ColorWatch } from "../assets/icons"

export default function Settings({navigation}:{navigation:any}){
    return(
        <View style={{flex:1, backgroundColor:"#FFFFFF"}}> 
            <View style={{position:"relative",height:80,   paddingHorizontal:18, justifyContent:"center",}}>
                <View style={{flexDirection:"row", alignItems:"center"}} >
                    <BackIcon onPress={()=>navigation.goBack()}/>
                    <Text style={{marginLeft:12, fontSize:20,}}>SETTINGS</Text>
                </View>
                <ColorWatch style={{position: "absolute", right:18}}/>
            </View>
            <View style={{flex: 1, paddingHorizontal:18, paddingTop:16}}>
                <View style={{height:100, backgroundColor:"yellow", borderRadius: 6, alignItems:"center", flexDirection:"row", paddingHorizontal:10}}>
                    <ClockIcon/>
                    <View style={{marginLeft:18}} >
                        <Text>Name Tourment</Text>
                        <Text>10MS Vs 10MS</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
