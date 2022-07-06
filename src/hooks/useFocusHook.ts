import { useState } from "react";

const useFocus = () => {
  const [isFocused, setIsFocused] = useState<{ [x: string]: string }>({});
  const toggleFocus = (caller: { [x: string]: string }) => {
    if (isFocused[Object.keys(caller)[0]]) {
      setIsFocused({});
      return;
    }
    setIsFocused({ ...caller });
  };

  return { isFocused, toggleFocus };
};

export default useFocus;
