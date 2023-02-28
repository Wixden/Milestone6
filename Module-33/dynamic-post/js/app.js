const postUrl = "https://jsonplaceholder.typicode.com/posts";
function loadPost() {
  fetch(postUrl)
    .then((res) => res.json())
    .then((post) => displayPost2(post)); //used for...of
}

// Option 1: use foreach
function displayPost(post) {
  const postContainer = document.getElementById("post-container");
  post.forEach((post) => {
    const postItem = `
    <div class="card bg-white/10 shadow-xl border backdrop-blur-xl">
    <div class="card-body">
      <h2 class="card-title my-3">${post.title}</h2>
      <p>${post.body}</p>
      <div class="card-actions justify-start mt-5">
        <button class="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
    `;
    postContainer.innerHTML += postItem;
  });
}

// Option 2: use for...of
function displayPost2(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add(
      "card",
      "bg-white/10",
      "shadow-xl",
      "border",
      "backdrop-blur-xl"
    );
    postDiv.innerHTML = `
    <div class="card-body">
    <h2 class="card-title my-3">${post.title}</h2>
    <p>${post.body}</p>
    <div class="card-actions justify-start mt-5">
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
    `;
    postContainer.appendChild(postDiv);
  }
}

function createPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function patchPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

loadPost();
