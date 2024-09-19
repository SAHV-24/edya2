import { useFetch } from "../useFetch.jsx";
import {useCounter} from "../useCounter.jsx"



function MultipleCustomHooks() {

  const { count, handleAdd} = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`);

  return (
    <>
      <blockquote>{isLoading && !hasError ? "Loading..." : data.forms[0].name} </blockquote>
      <button onClick={handleAdd}>Incrementar </button>
    </>
  );
}

export default MultipleCustomHooks;
