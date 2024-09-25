import { useState, useCallback } from "react";
import { Son } from "./Son";

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);
  const [val, setVal] = useState(true);

  const increment = useCallback(
    (num) => {
      setValor(valor + num);
    },
    [val]
  );

  return (
    <div id="the-div">
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />
      <div id="buttons">
        {list.map((n, idx) => {
          return <Son key={idx} numero={n} increment={increment} />;
        })}
      </div>
      <hr />
      <button
        onClick={() => {
          setVal(!val);
        }}
      >
        Interruptor
      </button>
    </div>
  );
};
