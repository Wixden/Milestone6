const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: true,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: true,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
    {
      name: {
        common: "Safa",
        fullName: ["Safa", "Kabir"],
      },
      age: 28,
      isMale: false,
      address: {
        street: "41/B St Martin",
        house: 31,
      },
    },
    {
      name: {
        common: "Hazel",
        fullName: ["Hazel", "Moore"],
      },
      age: 25,
      isMale: false,
      address: {
        street: "69/X St Luxembourg",
        house: 19,
      },
    },
    {
      name: {
        common: "Lexi",
        fullName: ["Lexi", "Lore"],
      },
      age: 27,
      isMale: false,
      address: {
        street: "13/C Lexi Road",
        house: 11,
      },
    },
    {
      name: {
        common: "Luna",
        fullName: ["Luna", "Little"],
      },
      age: 23,
      isMale: false,
      address: {
        street: "25/D St Lucia",
        house: 101,
      },
    },
  ],
};

// Results property have an array of persons.
const itemLength = document.getElementById("item__number");
itemLength.innerText = `Found ${person.result.length} Persons`;

const displayData = (persons) => {
  const itemContainer = document.getElementById("item__container");
  for (const person of persons) {
    const item = document.createElement("div");
    item.classList.add("rounded-lg", "shadow-lg", "bg-white");
    item.innerHTML = `
      <div class="bg-gray-300 p-5 rounded-tl-lg rounded-tr-lg">
        <p class="text-xl font-semibold">Person Name: ${person.name.common}</p>
      </div>
      <div class="p-5 space-y-5">
        <p>Full Name: ${person.name.common + " " + person.name.fullName[1]}</p>
        <p>Age: ${person.age} </p>
        <p>Gender: ${person.isMale ? "Male" : "Female"}</p>
        <p>Address: ${person.address.house + " " + person.address.street} </p>
      </div>
    `;
    itemContainer.appendChild(item);
  }
};
displayData(person.result);
