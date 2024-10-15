import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./Error404";
import { SearchInput } from "./components/SearchInput";
import { Product } from "./components/Product";
import { Login } from "./components/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";

export function AppRouter() {
  return (
    <Routes>
      {/* Rutas privadas */}
      <Route path="/" element={<PrivateRoutes />}>
        <Route
          path="/"
          element={
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSF_fnMRJe1SJz5gDauofQYjWSPej6f4_y3tRenKukDqGysKnQLKo01LO3WMeqnsTvBOdzvcPw2MOTZIoQHlSbvwov0H3vHG1Cjdg3P6k1G3Qk7XeX01_3-&usqp=CAE" />
          }
        />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/search" element={<SearchInput />} />
      </Route>

      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Navigate to="/login" />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}
