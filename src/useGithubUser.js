import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((response) => response.json())

export default function useGithubUser(username) {
  console.log(username);
  const url = `https://api.github.com/users/${username}`;
  const { data, error } = useSWR(() => url , fetcher);

  return { data, error };
}
