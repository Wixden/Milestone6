const numbers = [2, 8, 4, 6, 3];
let output = [];
for (const number of numbers) {
  const double = number * 2;
  output.push(double);
}

// console.log(output);

const doubleIt = (num) => num * 2;

// Map does the work for every single item in an array separately.
const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map((num) => num * 2);
// console.log(makeDouble);
// console.log(makeDouble2);
