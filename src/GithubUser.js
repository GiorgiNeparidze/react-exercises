import React from "react";
import { useState, useEffect } from "react";

function useGithubUser (username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [username]);

  return data

}

export default function GithubUser({username}) {
  const data = useGithubUser(username)
  

  return <div>GithubUser: {data && data.name}</div>;
}
