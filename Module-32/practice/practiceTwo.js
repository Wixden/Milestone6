/**
 * You have an array [1, 9, 17, 22]. Add all the elements of this array
 * and return the output. do this using for loop & array.reduce() method.
 */

const num = [1, 9, 17, 22];

function sumUp(arr) {
  let sum = 0;
  for (number of arr) {
    sum += number;
  }
  return sum;
}

const doReduce = num.reduce((prev, curr) => prev + curr, 0);

const sum = console.log(sumUp(num));
const reduce = console.log(doReduce);
