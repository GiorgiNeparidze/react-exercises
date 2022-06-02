import { useState } from "react";
function useLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: false,
    btnenable: true,
  });

  const logInEventHandler = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const check = event.target.checked;
    console.log(name, type, value, check);

    setCredentials((credentials) => {
      return {
        ...credentials,
        [name]: type === "checkbox" ? check : value,
      };
    });
  };
  return {
    credentials: credentials,
    trackLogin: logInEventHandler,
  };
}

export default function Login() {
  const { credentials, trackLogin } = useLogin();

  return (
    <div>
      <input
        name="username"
        value={credentials.username}
        onChange={trackLogin}
      />
      <input
        name="password"
        type="password"
        value={credentials.password}
        onChange={trackLogin}
      />
      <input
        name="remember"
        type="checkbox"
        checked={credentials.remember}
        onChange={trackLogin}
      />
      <button disabled={!(credentials.username && credentials.password)}>
        Log In!
      </button>
    </div>
  );
}
