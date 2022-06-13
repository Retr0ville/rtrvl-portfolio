import React, { createContext, SetStateAction, useState } from "react";

type focusContextType = {
  currFocused : string
  setCurrFocused : React.Dispatch<SetStateAction<string>>
}
const focusContext = createContext<focusContextType>({
  currFocused : "",
  setCurrFocused : ()=>{}
})

export default focusContext
