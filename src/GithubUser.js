import React from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser(props) {
  const { data, error, onRefresh } = useGithubUser(props.username);
  console.log(data)

  return (
    <div>
      <button onClick={onRefresh} >Refresh!</button>
      {!data && !error && <h1>Loading...</h1>}
      {!error && !props.username && <h1>Check your username!</h1>}
      {data && !error&& <h1>Github User: {data.name}</h1>}
    </div>
  );
}
