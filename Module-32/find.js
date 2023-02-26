const numbers = [12, 3, 55, 60, 40, 20, 91, 11, 24, 6];

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const findMax = numbers.find((num) => num > 30);
const findMin = numbers.find((num) => num < 30);
const findEven = numbers.find((num) => num % 2 === 0);

const products = [
  { id: 1, name: "Laptop", price: 85000 },
  { id: 2, name: "Mobile", price: 65000 },
  { id: 3, name: "Watch", price: 35000 },
  { id: 4, name: "Tablet", price: 25000 },
  { id: 5, name: "Power Bank", price: 5000 },
  { id: 6, name: "Bag", price: 3500 },
];

console.log(findMax, "\n", findMin, "\n", findEven);
