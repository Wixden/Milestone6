const loadCountries = async () => {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data);
  } catch (error) {
    console.log(error);
  }
};

// Create Item Function
const createCountryItem = (country) => {
  const countryItem = document.createElement("div");
  countryItem.classList.add(
    "card",
    "shadow-xl",
    "border",
    "px-5",
    "py-10",
    "rounded-lg",
    "bg-gray-100",
    "hover:-translate-y-8",
    "transition",
    "duration-500",
    "ease-in-out"
  );
  countryItem.innerHTML = `
      <figure class="flex justify-center">
        <img class="rounded-lg h-36 w-72"
          src="${country.flags.png}"
          alt="Album"
        />
      </figure>  
      <div class="p-5 text-center">
        <h1
        class="text-xl font-bold mb-5"
        >
          Name: ${country.name.common}
        </h1>
        <div class="space-y-3">
        <p leading-relaxed">
          Capital: ${country.capital}
        </p>
        <p leading-relaxed">
          Region: ${country.region}
        </p>
        <p leading-relaxed">
          Population: ${country.population}
        </p>
        </div>
      </div>
    `;
  return countryItem;
};

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("country__container");
  const regionSelector = document.getElementById("region");

  const showAllCountries = () => {
    countryContainer.innerHTML = "";
    countries.forEach((country) => {
      const countryItem = createCountryItem(country);
      countryContainer.appendChild(countryItem);
    });
  };

  // Filtered Country
  const filterCountriesByRegion = () => {
    const selectedRegion = regionSelector.value;
    const filteredCountries = countries.filter(
      (country) => country.region === selectedRegion
    );
    countryContainer.innerHTML = "";
    filteredCountries.forEach((country) => {
      const countryItem = createCountryItem(country);
      countryContainer.appendChild(countryItem);
    });
  };

  regionSelector.addEventListener("change", () => {
    const selectedRegion = regionSelector.value;
    if (selectedRegion === "all") {
      showAllCountries();
    } else {
      filterCountriesByRegion();
    }
  });

  // Show all countries by default
  showAllCountries();
};
// Filter Country Here

loadCountries();
