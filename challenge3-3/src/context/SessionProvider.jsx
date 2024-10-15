import { useState } from "react";
import { SessionContext } from "./sessionContext";

export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("Bob");

  return (
    <SessionContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}
    >
      {children}
    </SessionContext.Provider>
  );
};
