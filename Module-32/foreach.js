const friends = [
  "Tom Cruise",
  "Tom Hank",
  "Tom Hardy",
  "Tom Holland",
  "Tom Hiddleston",
  "Tom Hopper",
];

const products = [
  { id: 1, name: "Laptop", price: 85000 },
  { id: 2, name: "Mobile", price: 65000 },
  { id: 3, name: "Watch", price: 35000 },
  { id: 4, name: "Tablet", price: 25000 },
  { id: 5, name: "Power Bank", price: 5000 },
  { id: 6, name: "Bag", price: 3500 },
];

friends.forEach((friend) => console.log(friend));
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.price));
