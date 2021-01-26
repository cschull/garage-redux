// TODO: add and export your own actions
export const FETCH_OWNERS = "FETCH_OWNERS";
export const CREATE_OWNER = "CREATE_OWNER";
export const FETCH_CAR = "FETCH_CAR";
export const DELETE_CAR = "DELETE_CAR";

const BASE_URL = "https://wagon-garage-api.herokuapp.com";

export function fetchOwners(garage) {
  console.log('i am fetching all cars');
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

export function fetchCar(id) {
  const promise = fetch(`${BASE_URL}/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function createOwner(garage, body, callback) {
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

export function deleteCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  const request = fetch(url, { method: 'DELETE'})
    .then(r => r.json())
    .then(() => history.push("/"));

  return {
    type: DELETE_CAR,
    payload: car
  };
}
