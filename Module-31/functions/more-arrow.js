const fullName = (firstName, lastName) => firstName + " " + lastName;
const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

// Multi parameter arrow function
const addAll = (a, b, c, d, e) => a + b + c + d + e;

// No parameter arrow function
const noParamArrowFnc = () => 3.14;

// One parameter arrow function
const doubleIt = (num) => num * 2;

// One parameter simple version (it is not required to use () if an arrow function has one parameter)
const multiplyIt = (num) => num * 5;

// Multiline arrow function
// For multiline arrow function it is required to use second bracket{} and it doesn't return by default you need to use return after the code
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiply = firstSum * secondSum;
  const result = multiply / 2;
  return result;
};

console.log(fullName("Mohammed", "Akhtar"));
console.log(addAll(1, 2, 3, 4, 5));
console.log(doMath(2, 2, 2));
