const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

// Name, Flags, Capital, Region, cca2/cca3, language, populations,

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("country-container");
  for (country of countries) {
    console.log(country.cca2);
    const cardBody = document.createElement("div");
    cardBody.classList.add(
      "card",
      "shadow-xl",
      "my-10",
      "border",
      "px-5",
      "py-10"
    );
    cardBody.innerHTML = `
  <figure>
    <img class="rounded-lg h-36 w-72"
      src="${country.flags.png}"
      alt="Album"
    />
  </figure>  
  <div class="card-body items-center text-center">
    <p><b>Name:</b> ${country.name.common}</p>
    <p><b>Official Name:</b> ${country.name.official} </p>
    <div class="card-actions justify-start mt-5">
      <button class="btn btn-primary" onclick="loadCountryDetails('${country.cca3}')">
        Details
      </button>
    </div>  
  </div>
  `;
    countryContainer.appendChild(cardBody);
  }
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  const countryThumbnail = document.getElementById("country-thumbnail");
  countryThumbnail.innerHTML = `
    <img
      class="object-cover object-center rounded md:w-[600px] md:h-[300px]"
      alt="hero"
      src="${country.flags.png}"
    />
  `;
  const countryDetails = document.getElementById("country-details");
  countryDetails.innerHTML = `    
    <h1
    class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
  >
   Name: ${country.name.common}
  </h1>
  <p class="mb-8 leading-relaxed">
    Official Name: ${country.name.official}
  </p>
  <p class="mb-8 leading-relaxed">
    Capital: ${country.capital}
  </p>
  <p class="mb-8 leading-relaxed">
    Region: ${country.region}
  </p>
  <p class="mb-8 leading-relaxed">
    Population: ${country.population}
  </p>
  `;
};

loadCountries();
