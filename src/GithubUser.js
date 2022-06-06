import React from "react";
import useGithubUser from './useGithubUser'


export default function GithubUser({ username }) {
  const data = useGithubUser(username);

  return <div>GithubUser: {data && data.name}</div>;
}
