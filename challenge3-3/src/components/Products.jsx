import "../index.css";
import { Product } from "./Product";

export function Products() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div id="grid">
      {array.map((val, index) => {
        <Product key={index}>{val}</Product>;
      })}
    </div>
  );
}
