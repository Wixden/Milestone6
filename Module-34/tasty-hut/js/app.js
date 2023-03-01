const loadFood = async (searchInput) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const foods = data.meals.slice(0, 6); // get the first 6 items
    displayFood(foods);
    // Help From ChatGpt
    const button = document.getElementById("loadMore__btn");
    button.addEventListener("click", () => {
      displayFood(data.meals);
      document.getElementById("loadMore__btn").style.display = "none";
    }); // show all items on button click
  } catch (error) {
    console.log(error);
  }
};

const displayFood = (foods) => {
  const foodContainer = document.getElementById("food__container");
  foodContainer.innerHTML = "";
  // Show more Button and event Listener
  /*const showAllButton = document.getElementById("loadMore__btn");
  showAllButton.addEventListener("click", () => {
    displayAllFood(foods);
    showAllButton.style.display = "none";
  });
  const firstSixFoods = foods.slice(0, 6);*/
  for (const food of /*firstSixFoods*/ foods) {
    const foodItem = document.createElement("div");
    foodItem.classList.add("card", "card-side", "bg-base-100", "shadow-xl");
    foodItem.innerHTML = `    
    <figure>
      <img
        src="${food.strMealThumb}"
        alt=""
        class="w-80 h-96 rounded-tl-lg rounded-bl-lg"
      />
    </figure>
    <div class="card-body justify-center">
      <h2 class="card-title font-bold">${food.strMeal}</h2>
      <div class="text-lg mt-3 space-y-2">
        <p><b>Origin:</b> ${food.strArea}</p>
        <p><b>Tags:</b> chicken, indian, asian</p>
        <p><b>Category:</b> Main Dish</p>
        <p><b>Ingredients: </b> Chicken, Onion, Potato,</p>
      </div>
      <div class="card-actions">
      <label for="my-modal-6"
      onclick="loadRecipe(${food.idMeal})"
      class="py-5 text-amber-500 text-xl font-bold underline">View Recipe</label>
      </div>      
    </div>
    `;
    foodContainer.appendChild(foodItem);
  }
  /* if (foods.length > 6) {
    showAllButton.style.display = "block";
  } */
};

const displayAllFood = (foods) => {
  const foodContainer = document.getElementById("food__container");
  foodContainer.innerHTML = "";
  for (const food of foods) {
    const foodItem = document.createElement("div");
    foodItem.classList.add("card", "card-side", "bg-base-100", "shadow-xl");
    foodItem.innerHTML = `    
    <figure>
      <img
        src="${food.strMealThumb}"
        alt=""
        class="w-80 h-96 rounded-tl-lg rounded-bl-lg"
      />
    </figure>
    <div class="card-body justify-center">
      <h2 class="card-title font-bold">${food.strMeal}</h2>
      <div class="text-lg mt-3 space-y-2">
        <p><b>Origin:</b> ${food.strArea}</p>
        <p><b>Tags:</b> chicken, indian, asian</p>
        <p><b>Category:</b> Main Dish</p>
        <p><b>Ingredients: </b> Chicken, Onion, Potato,</p>
      </div>
      <div class="card-actions">
      <label for="my-modal-6"
      onclick="loadRecipe(${food.idMeal})"
      class="py-5 text-amber-500 text-xl font-bold underline">View Recipe</label>
      </div>      
    </div>
    `;
    foodContainer.appendChild(foodItem);
  }
};

// Show result according to search
const searchItem = () => {
  const searchInput = document.getElementById("search__input");
  loadFood(searchInput.value);
  searchInput.value = "";
};

// Load Recipe
const loadRecipe = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  const res = await fetch(url);
  const data = await res.json();
  displayRecipe(data.meals[0]);
};

// Display Recipe
const displayRecipe = (recipe) => {
  const recipeContainer = document.getElementById("recipe__container");
  recipeContainer.innerHTML = `
  <figure>
  <img class="rounded-lg"
    src="${recipe.strMealThumb}"
    alt="Album"
  />
</figure>
  <h3 class="font-bold text-lg mt-5">
    ${recipe.strMeal}
  </h3>
  <p class="py-4">
    ${recipe.strInstructions}
  </p>
  <div class="modal-action">
    <label for="my-modal-6" class="btn">Thanks</label>
  </div>
  `;
};

loadFood("cake");
