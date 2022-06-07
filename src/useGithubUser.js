import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((response) => response.json())

export default function useGithubUser(username) {
  console.log(username);
  const url = `https://api.github.com/users/${username}`;
  const { data, error, mutate } = useSWR(() => url , fetcher);

  function onRefresh (){
    mutate()
  }

  return { data, error, onRefresh };
}
