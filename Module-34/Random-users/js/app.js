const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const userContainer = document.getElementById("user-container");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card", "shadow-xl", "my-10");
  cardBody.innerHTML = `
  <figure class="px-10 pt-10">
    <img class="rounded-full"
      src="${user.results[0].picture.large}"
      alt="Album"
    />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title mb-5 font-bold">User Details</h2>
    <p><b>Name:</b> ${
      user.results[0].name.first + " " + user.results[0].name.last
    }</p>
    <p><b>User Name:</b> ${user.results[0].login.username} </p>
    <p><b>Phone:</b> ${user.results[0].phone}</p>
    <p><b>Email:</b> ${user.results[0].email}</p>
    <p><b>Address:</b> ${
      user.results[0].location.city + ", " + user.results[0].location.country
    }</p>
  </div>
  `;
  userContainer.appendChild(cardBody);
};

loadUser();
