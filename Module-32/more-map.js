const numbers = [12, 56, 87, 44];
const half = numbers.map((n) => n / 2);
const third = numbers.map((n) => n / 3);

console.log(half);
console.log(third);

const friends = [
  "Tom Cruise",
  "Tom Hank",
  "Tom Hardy",
  "Tom Holland",
  "Tom Hiddleston",
  "Tom Hopper",
];
const friendsName = friends.map((friend) => friend.length);
console.log(friendsName);

const products = [
  { id: 1, name: "Laptop", price: 85000 },
  { id: 2, name: "Mobile", price: 65000 },
  { id: 3, name: "Watch", price: 35000 },
  { id: 4, name: "Tablet", price: 25000 },
  { id: 5, name: "Power Bank", price: 5000 },
  { id: 6, name: "Bag", price: 3500 },
];

const name = products.map((product) => product.name);
const price = products.map((product) => product.price);
const id = products.map((product) => product.id);

console.log("Product Name = ", name);
console.log("Product Price = ", price);
console.log("Product ID = ", id);
