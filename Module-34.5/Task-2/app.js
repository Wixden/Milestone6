const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];

// Display Car Item Count:
const carCount = document.getElementById("car__count");
carCount.innerText = data.length + " Car Found";

const displayCarItem = (cars) => {
  const carContainer = document.getElementById("car__container");
  for (const car of cars) {
    const carItem = document.createElement("div");
    carItem.classList.add("p-5", "rounded-md", "shadow-xl");
    carItem.innerHTML = `
      <figure>
        <img src="${
          car?.imageURL
            ? car.imageURL
            : "https://www.wezen.com/wp-content/themes/applounge/assets/images/no-image/No-Image-Found-400x264.png"
        }" alt="Shoes" />
      </figure>
      <div class="p-5">
        <h2 class="text-2xl font-[700] my-5">MitoSedan</h2>
        <p class="mb-2">
          <b>Description:</b> Vehicle Type: Sedan, Doors: 2, Seats: 2,
          Luggage: 2 Suitcases / 2 Bags, Transmission: Manual
        </p>
        <p><b>Price:</b></p>
        <div class="mt-5">
          <button
            class="px-8 py-3 bg-blue-500 rounded text-white font-semibold"
          >
            Buy Now
          </button>
        </div>
      </div>
    `;
    carContainer.appendChild(carItem);
  }
};

displayCarItem(data);
