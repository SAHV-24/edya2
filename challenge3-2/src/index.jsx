import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Main} from "./components/Main"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Main id="main"/>
  </BrowserRouter>
);
