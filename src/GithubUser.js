import React from "react";
import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchData = async (username) => {
    setLoading(true);
    setErr(null);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(() => {
        setErr(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData(username);
  }, [username]);

  return {
    data: data,
    loading: loading,
    err: err,
  };
}

export default function GithubUser({ username }) {
  const { data, loading, err } = useGithubUser(username);

  return (
    <div>
      {loading && <h1>loading...</h1>}

      {err && <h1>ERRORCODE404 User NOT found!</h1>}

      {data && <h1>Github user: {data.name}</h1>}
    </div>
  );
}
