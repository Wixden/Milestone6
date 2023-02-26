// The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json()) // .json() is not same but similar to JSON.parse().
    .then((json) => console.log(json));
}
