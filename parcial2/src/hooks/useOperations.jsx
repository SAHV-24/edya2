import { useState } from "react";

function useOperations() {
  const [number, setNumber] = useState("");
  const [isUniqueOperand, setIsUniqueOperand] = useState(false);
  const items = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    ".",
    "*",
    "÷",
    "AC",
    "=",
  ];

  function calculateOp(operation, numberOne, numberTwo) {
    switch (operation) {
      case "+": return numberOne + numberTwo;
      case "-": return numberOne - numberTwo;
      case "*": return numberOne * numberTwo;
      case "÷": return numberTwo === 0 ? "Error" : numberOne / numberTwo;
      default: return 0;
    }
  }

  const handleClick = (text) => {

    if (text === "AC") {
      // clear
      setNumber("");

    } else if (text === "=") {

      ["+", "-", "*", "÷"].forEach((op) => {

        if (number.includes(op)) {
          const [numberOne, numberTwo] = number.split(op);
          const result = calculateOp(op,parseFloat(numberOne),parseFloat(numberTwo));
          setNumber(result.toString());
          if(result === "Error"){
            setTimeout(()=>setNumber(""),1500)
          }

          setIsUniqueOperand(false);
        }

      });

    } else {
      if (["+", "-", "*", "÷"].includes(text)) {

        setIsUniqueOperand(true);
        setNumber(number + text);

        if (isUniqueOperand) {
          setIsUniqueOperand(false);
          setNumber("");
          return;
        }
      }
      setNumber(number + text);
    }
  };

  return { number, setNumber, calculateOp, handleClick, items };
}

export default useOperations;
