import { useState } from "react";
export default function Login() {
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
  return (
    <div>
      <input
        name="username"
        value={credentials.username}
        onChange={logInEventHandler}
      />
      <input
        name="password"
        type="password"
        value={credentials.password}
        onChange={logInEventHandler}
      />
      <input
        name="remember"
        type="checkbox"
        checked={credentials.remember}
        onChange={logInEventHandler}
      />
      <button disabled={!(credentials.username && credentials.password)}>
        Log In!
      </button>
    </div>
  );
}
