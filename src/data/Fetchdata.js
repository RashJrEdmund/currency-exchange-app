export default function Fetchdata() {
  const APIKEY = '237798856c-5ad69a3925-rpwjk4';

  return fetch(`https://api.fastforex.io/fetch-all?api_key=${APIKEY}`)
    .then((response) => response.json())
    .then((jsonfile) => jsonfile.results);
}
