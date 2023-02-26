// default function
function calculate(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

// Option 2
function summation(num1, num2) {
  return num1 + num2;
}

// Option 3 Anonymous Function
const sum = function (num1, num2) {
  return num1 + num2;
};

// Option 4 Arrow Function
const add = (num1, num2) => num1 + num2;

// Interview question: Difference between regular function, function declaration, function expression and arrow function

console.log(add(10, 20));
