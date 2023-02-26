const numbers = [12, 3, 55, 60, 40, 20, 91, 11, 24, 6];

const findMax = numbers.filter((num) => num > 30);
const findMin = numbers.filter((num) => num < 30);
const findEven = numbers.filter((num) => num % 2 === 0);

const products = [
  { id: 1, name: "Laptop", price: 85000 },
  { id: 2, name: "Mobile", price: 65000 },
  { id: 3, name: "Watch", price: 35000 },
  { id: 4, name: "Tablet", price: 25000 },
  { id: 5, name: "Power Bank", price: 5000 },
  { id: 6, name: "Bag", price: 3500 },
];

// In the below function we used filter() to filter out the expensive and cheap product and then we used map() to return only one object property which we need instead of whole array item

const expensiveProduct = products
  .filter((p) => p.price > 30000)
  .map((p) => p.price);
const cheapProduct = products
  .filter((p) => p.price < 30000)
  .map((p) => p.price);

console.log(
  findMax,
  "\n",
  findMin,
  "\n",
  findEven,
  "\n",
  expensiveProduct,
  "\n",
  cheapProduct
);
