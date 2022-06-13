import { useState } from "react";

const useFocus = ()=> {
    const [isFocused, setIsFocused] = useState({});
    const toggleFocus =(projectName: string)=> {
        setIsFocused({[projectName] : true})
    }

    return [ isFocused, toggleFocus ]
}

export default useFocus
