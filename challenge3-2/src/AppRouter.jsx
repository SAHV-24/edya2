import { Route, Routes } from "react-router-dom";
import { Error404 } from "./Error404";
import{SearchInput} from  "./components/SearchInput"
import {About} from "./components/About"

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSF_fnMRJe1SJz5gDauofQYjWSPej6f4_y3tRenKukDqGysKnQLKo01LO3WMeqnsTvBOdzvcPw2MOTZIoQHlSbvwov0H3vHG1Cjdg3P6k1G3Qk7XeX01_3-&usqp=CAE" />
        }
      />
      <Route path="/about" element={<About/>} />
      <Route path="/search" element={<SearchInput/>} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}
