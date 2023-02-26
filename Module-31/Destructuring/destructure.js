const fish = {
  fishName: "Hilsa",
  fishPrice: 1000,
  fishColor: "Silver",
};

// console.log(fish.price);
// console.log(fish.price);
// console.log(fish.price);
// console.log(fish.price);
// console.log(fish.price);
// console.log(fish.price);
// instead of repeating the same code store the value inside a variable
const FishPrice = fish.price;
const FishColor = fish.color;
const FishName = fish.name;
console.log(FishPrice);

// Here is a simple way to create variable using object name. The name of var has to be same as object property name
// Object Destructuring

const { fishName, fishPrice, fishColor } = fish;

const { name, color, size, price } = {
  name: "Sneakers",
  color: "Red and Black",
  size: "XL",
  price: 5000,
};

console.log(name);
