import { useFetch } from "../useFetch.jsx";
import { useCounter } from "../useCounter.jsx";
import "./MultipleCustomHooks.css";

function MultipleCustomHooks() {
  const { count, handleAdd } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  const pokemonName = data?.forms[0]?.name;
  console.log(pokemonName)

  return (
    <div className="multiple inverse">
      {isLoading && !hasError ? (
        <div id="loading" className="multiple">
          Loading...
        </div>
      ) : (
        <blockquote className="multiple">{pokemonName}</blockquote>
      )}

      <button className="myButton" onClick={handleAdd}>
        Incrementar
      </button>
    </div>
  );
}

export default MultipleCustomHooks;
