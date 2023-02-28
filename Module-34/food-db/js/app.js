const loadUser = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
};

const displayFood = (foods) => {
  const userContainer = document.getElementById("food-container");
  userContainer.innerHTML = "";
  for (const food of foods) {
    const cardBody = document.createElement("div");
    cardBody.classList.add("card", "shadow-xl", "border", "p-10");
    cardBody.innerHTML = `
    <figure>
      <img class="rounded-lg"
        src="${food.strMealThumb}"
        alt="Album"
      />
    </figure>
    <div class="card-body items-center text-center ">
      <h2 class="card-title mb-2 font-bold">${food.strMeal}</h2>
      <p>Category: ${food.strCategory}</p>
      <p>Origin: ${food.strArea}</p>
      <p>Tags: ${food.strTags}</p>
      <label onclick="loadRecipe(${food.idMeal})" for="my-modal" class="btn mt-5 bg-blue-500 text-white px-8">Open Recipe</label>
    </div>
    
    `;
    userContainer.appendChild(cardBody);
  }
};

const searchItems = () => {
  const searchInput = document.getElementById("searchInput");
  // console.log(searchInput);
  loadUser(searchInput.value);
  searchInput.value = "";
};

const loadRecipe = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayRecipe(data.meals[0]));
};

const displayRecipe = (recipe) => {
  const recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = `
  <figure>
      <img class="rounded-lg"
        src="${recipe.strMealThumb}"
        alt="Album"
      />
    </figure>
  <h3 class="font-bold text-xl text-center mt-5">
    Recipe For: ${recipe.strMeal}
  </h3>
  <p class="py-4">
    ${recipe.strInstructions}
  </p>
  <div class="modal-action">
    <label for="my-modal" class="btn">Close</label>
  </div>
  `;
};

loadUser("chicken");
