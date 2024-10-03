import Button from "./Button";
import Screen from "./Screen";
import useOperations from "../hooks/useOperations";

function Calculator() {
  const { number, handleClick, items } = useOperations();

  return (
    <>
      <div id="calculator">
        <Screen number={number} />

        <div id="items">
          {items.map((item, key) => {
            return <Button key={key} text={item} handle={handleClick} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Calculator;
