// TODO: add and export your own actions
export const FETCH_OWNERS = "FETCH_OWNERS";
export const CREATE_OWNER = "CREATE_OWNER";


const BASE_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchOwners(garage) {
  return fetch(`${BASE_URL}/${garage}/cars`)
    .then(response => response.json())
    .then((data) => {
      console.log(`url: ${BASE_URL}/${garage}/cars`);
      console.log("fetched data below:");
      console.log(data);
      return {
        type: FETCH_OWNERS,
        payload: data
      };
    });
}

export function createOwner(garage, body, callback) {
  console.log("POST info:");
  console.log(`garage: ${garage}`);
  console.log("body:");
  console.log(body);
  console.log(`callback: ${callback}`);
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(() => callback());
  return {
    type: CREATE_OWNER,
    payload: request
  };
}
