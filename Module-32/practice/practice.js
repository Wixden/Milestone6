// Problem One:
/**
 * You have an odd array (array with odd numbers). [1,3,5,7,9]. Now convert this array into an even array [2,4,6,7,10].
 * Do this using for loop and array.map() methods.
 * HINT: add one to any odd number and it will become even number
 */
const numbers = [1, 3, 5, 7, 9];
const numbers2 = [11, 33, 55, 77, 99];
const convertOdd = numbers.map((num) => num + 1);
console.log(convertOdd);

let even = [];
for (number of numbers2) {
  const oddToEven = number + 1;
  even.push(oddToEven);
}
console.log(even);

// Problem Two:
/**
 * You are given an array [33, 50, 79, 90, 101, 30]. Now return all the element which is divisible by 10
 * using filter() method
 */

const numberArray = [33, 50, 79, 90, 101, 30];

const isDivisible = numberArray.filter((num) => num % 10 === 0);
console.log(isDivisible);

// Problem Three:
/**
 * Now do the same as problem two. but do this using array.find() method.
 * Then compare the output of problem three and problem two.
 */

const findDivisible = numberArray.find((num) => num % 10 === 0);
console.log(findDivisible);

// Compare
if (isDivisible.includes(findDivisible)) {
  console.log("Problem Two and Three has same output");
} else {
  console.log("Problem Two and Three has different output");
}
