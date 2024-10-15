import { AppRouter } from "../AppRouter";
import { NavBar } from "./NavBar";
import {SessionProvider} from "../context/SessionProvider"


export function Main() {
  return (
    <SessionProvider>
      <div id="main">
        <NavBar />
        <AppRouter />
      </div>
    </SessionProvider>
  );
}
