import { useState } from "react";

export function useCounter(counter) {
  const [count, setCount] = useState(counter);
  const [textColor, setTextColor] = useState(counter);

  const handleAdd = () => {
    setCount(count + 1);
    setTextColor(Math.floor(Math.random() * 3));
  };

  const handleSubstract = () => {
    setCount(count - 1);
    setTextColor(Math.floor(Math.random() * 3));
  };

  const handleReset = () => {
    setCount(0);
    setTextColor(Math.floor(Math.random() * 3));
  };
  return {
    count,
    textColor,
    handleAdd,
    handleSubstract,
    handleReset,
  };
}
