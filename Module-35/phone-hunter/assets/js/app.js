// Load Data
const loadData = async (searchText, limit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayAllData(data.data, limit);

  // const showAllButton = document.getElementById("show__all");
  // showAllButton.addEventListener("click", () => {
  //   // Start Spinner
  //   if (data.data.length > 9) {
  //     showAllButton.classList.add("d-none");
  //     displayAllData(data.data);
  //   } else {
  //     showAllButton.classList.remove("d-none");
  //   }
  // });
};

// Display Data
const displayAllData = (phones, limit) => {
  const showAllButton = document.getElementById("show__all");
  if (limit && phones.length > 10) {
    phones = phones.slice(0, 9);
    showAllButton.classList.remove("d-none");
  } else {
    showAllButton.classList.add("d-none");
  }

  // No Data found
  const noPhone = document.getElementById("not__found");
  // Check for the phones length
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
          <button type="button" class="btn btn-primary btn-md" onclick="loadPhoneDetails('${phone.slug}')" data-bs-toggle="modal"
          data-bs-target="#phoneDetailsModal">
            Read more
          </button>
        </div>
      </div>
      <!-- Card -->
    `;
    phonesContainer.appendChild(phoneCard);
  }
  // Stop Spinner
  toggleSpinner(false);
};

// Limit search item to 9
const searchLimit = (limit) => {
  toggleSpinner(true);
  const searchInput = document.getElementById("search__input");
  const inputValue = searchInput.value;
  loadData(inputValue, limit);
};

document.getElementById("searchBtn").addEventListener("click", () => {
  searchLimit(9);
});

document
  .getElementById("search__input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchLimit(9);
    }
  });

document.getElementById("show__all").addEventListener("click", () => {
  searchLimit();
});

const toggleSpinner = (isLoading) => {
  const spinnerContainer = document.getElementById("spinner");
  if (isLoading) {
    spinnerContainer.classList.remove("d-none");
  } else {
    spinnerContainer.classList.add("d-none");
  }
};

const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
};

const displayPhoneDetails = (phone) => {
  const title = document.getElementById("phoneDetailsModalLabel");
  title.innerText = phone.name;
  const modalBody = document.getElementById("modal__body");
  modalBody.innerHTML = `
  <h4 class="mb-4">All Features</h4>
  <p><b>Brand:<b/> ${phone.brand}</p>
  <p><b>Chipset:</b> ${phone.mainFeatures.chipSet}</p>
  <p><b>Display:</b> ${phone.mainFeatures.displaySize}</p>
  <p><b>Memory:</b> ${phone.mainFeatures.memory}</p>
  <p><b>Storage:</b> ${phone.mainFeatures.storage}</p>
  `;
};

const scrollButton = document.getElementById("searchBtn");
const inputSearch = document.getElementById("search__input");
const mainSection = document.querySelector("main");

scrollButton.addEventListener("click", () => {
  setTimeout(() => {
    mainSection.scrollIntoView({ behavior: "smooth" });
  }, 100); // wait for 100 milliseconds before scrolling
});

// Show result on Enter Key press
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    setTimeout(() => {
      mainSection.scrollIntoView({ behavior: "smooth" });
    }, 100); // wait for 100 milliseconds before scrolling
  }
});

loadData("apple");
