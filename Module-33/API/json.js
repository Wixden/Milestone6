const user = { id: 1, name: "John Doe", job: "Actor" };
console.log(user);

// convert js object to json which will make the object to string
const userJSON = JSON.stringify(user);
console.log(userJSON);

const shop = {
  name: "Tech Shop",
  owner: "Abdul Ali",
  address: {
    street: "Luton",
    city: "London",
    country: "UK",
  },
  products: [
    "Computer",
    "Electronics",
    "Accessories",
    "Equipments",
    "Nutrients",
  ],
  revenue: 345000,
  isOpen: true,
  inNew: false,
};

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
