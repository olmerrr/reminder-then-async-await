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
fetchUsers(BASE_URL);
