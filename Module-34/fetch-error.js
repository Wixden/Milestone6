const loadMeal = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.meals[0].strMeal));
  // .catch((error) => console.log(error));
};

// async await
const loadMeal2 = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMeal(data.meals[0].strArea);
  } catch (error) {
    console.log(error);
  }
};

const displayMeal = (foods) => {
  console.log(foods);
};

loadMeal2("rice");
