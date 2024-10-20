import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice"; // Asegúrate de importar el reducer correctamente

export const store = configureStore({
  reducer: {
    counter: counterSlice, 
  },

});
