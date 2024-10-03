import { createRoot } from "react-dom/client";
import "./index.css";
import Calculator from "./components/Calculator.jsx";

createRoot(document.getElementById("root")).render(
  <div id="strict">
    <header>
      <h1>My calculator</h1>
      <h3>
        By <i>Sergio Herrera</i>
      </h3>
    </header>
    <div>
      <Calculator />
    </div>
  </div>
);
