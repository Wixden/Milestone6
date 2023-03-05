// Load Data
const loadData = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.data);
};

// Display Data
const displayAllData = (phones) => {
  phones = phones.slice(0, 9);

  // No Data found
  const noPhone = document.getElementById("not__found");
  if (phones.length === 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }

  const phonesContainer = document.getElementById("phones__container");
  phonesContainer.textContent = "";
  for (const phone of phones) {
    const phoneCard = document.createElement("div");
    phoneCard.classList.add("col", "mb-4");
    phoneCard.innerHTML = `
      <!-- Card -->
      <div class="card">
        <!--Card image-->
        <div class="view overlay p-5">
          <img
            class="card-img-top"
            src="${phone.image}"
            alt="Card image cap"
          />
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">${phone.phone_name}</h4>
          <!--Text-->
          <p class="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
          <button type="button" class="btn btn-primary btn-md">
            Read more
          </button>
        </div>
      </div>
      <!-- Card -->
    `;
    phonesContainer.appendChild(phoneCard);
  }
};

document.getElementById("searchBtn").addEventListener("click", () => {
  const searchInput = document.getElementById("search__input");
  const inputValue = searchInput.value;
  loadData(inputValue);
});

loadData();

const scrollButton = document.getElementById("searchBtn");
const mainSection = document.querySelector("main");

scrollButton.addEventListener("click", () => {
  mainSection.scrollIntoView({ behavior: "smooth" });
});
