import { MultipleCustomHooks } from "./MultipleCustomHooks.jsx";
import { useState } from "react";
function Phrase() {
  const [counter, setCounter] = useState(1);

  const { data, isLoading, hasError } = MultipleCustomHooks(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  console.log(data);

  return (
    <>
      <blockquote>{isLoading && !hasError ? "Loading..." : data} </blockquote>
      <button onClick={()=>{setCounter(counter + 1)}}>Incrementar </button>
    </>
  );
}

export default Phrase;
