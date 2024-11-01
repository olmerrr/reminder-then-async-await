const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers(url) {
  try {
    const response = await fetch(`${url}/users`);
    //server error
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    const users = await response.json();

    console.log(users);
  } catch (err) {
    console.log("error: ", err.message);
  }
}

//with then
// function fetchUsers(url) {
//   fetch(`${url}/users`)
//     .then((response) => response.json())
//     .then((users2) => console.log(users2));
// }
// fetchUsers(BASE_URL);

// POST
const body = {
  name: "Yaroslav",
  age: 33,
};

function sendRequest(method, url, body) {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(`${url}/users`, {
    method,
    body: JSON.stringify(body),
    headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((err) => {
        const error = new Error("Error!");
        error.data(err);
        throw error;
      });
    }
  });
}
sendRequest("POST", BASE_URL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log("Error: ", err));
