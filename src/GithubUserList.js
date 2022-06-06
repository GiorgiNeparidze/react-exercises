import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const addUser = () => {
    setUsers([...users, input]);
  };
  return (
    <div>
      <label>
        Enter Github Username and press add
        <input onChange={handleInput} type={"text"} value={input}></input>
      </label>
      <ul>
        {users.map((name, i) => (
          <li key={i}>
            <Link to={`${input}`}>
              <GithubUser key={i} username={name} />{" "}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={addUser}>Add</button>
      <Outlet />
    </div>
  );
}
