import { useState } from "react";

export function useCounter(counter) {
  const [count, setCount] = useState(counter);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return { count, handleAdd, handleSubstract, handleReset };
}
