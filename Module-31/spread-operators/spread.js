const max = Math.max(12, 33, 45);
console.log(max);

const numbers = [12, 34, 45, 66];
// const largest = Math.max(numbers); //output Nan
const largest = Math.max(...numbers);
console.log(numbers);
// Spread Operators
console.log(...numbers);

console.log(largest);

// reference
const newNumbers = numbers;
numbers.push(44); //the output will be same for both variable
newNumbers.push(76);

// Output
console.log(numbers);
console.log(newNumbers);

// store an array value in a new array
const number2 = [numbers];
numbers.push(51);
number2.push(95);

// Output
console.log(numbers);
console.log(number2);

// store an array value in a new array but use a plain array
const number3 = [...numbers]; //spread the array items instead of the whole array
numbers.push(410);
number3.push(350);

// Output
console.log(numbers);
console.log(number3);
