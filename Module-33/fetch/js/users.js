function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayUsers(json));
}

function displayUsers(data) {
  data.forEach((user) => console.log(user));
  data.forEach((user) => console.log(user.name, user.username));
}
