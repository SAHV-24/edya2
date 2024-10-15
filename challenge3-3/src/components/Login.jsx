import { useContext, useRef } from "react";
import { SessionContext } from "../context/sessionContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { setUsername, setIsLoggedIn } = useContext(SessionContext);
  const usernameRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);

    const username = usernameRef.current.value;
    if (username.trim() != "") setUsername(username);

    const path = localStorage.getItem("lastPath") || "/";

    navigate(path, {
      replace: true,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <section id="username">
          <h1>Username</h1>
          <input type="text" ref={usernameRef} />
        </section>
        <section id="password">
          <h1>Password</h1>
          <input type="text" />
        </section>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
