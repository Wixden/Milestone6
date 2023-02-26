function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayUsers(json));
}

function displayUsers(data) {
  const tBody = document.getElementById("tBody");
  data.forEach((user, index) => {
    const rowClass = index % 2 == 1 ? "active" : "";
    const row = `
    <tr class="${rowClass}">
        <th>${user.id}</th> 
        <td>${user.name}</td> 
        <td>${user.username}</td> 
        <td>${user.email}</td> 
        <td>${user.phone}</td> 
        <td>${user.website}</td> 
        <td>${user.company["name"]}</td>
    </tr>
    `;
    tBody.innerHTML += row;
  });
}

loadUsers();
