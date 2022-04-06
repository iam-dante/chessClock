import React,{createContext,  useState} from "react"
import Base from "./src/Pages"
import { NavigationContainer } from '@react-navigation/native';
import { SetTime } from "./src/Pages/SetTime";

// export const Context = createContext()

export default function App(){
  const [state, setState] =  useState(true)

  return(
    // <Context.Provider value={{state, setState}}>

      <NavigationContainer>
        <Base/>
        {/* <SetTime/> */}
      </NavigationContainer>
    // </Context.Provider>
  )
}
