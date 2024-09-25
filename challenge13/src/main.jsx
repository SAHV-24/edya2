import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Father } from "./components/Father";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Father/>
  </StrictMode>
);
