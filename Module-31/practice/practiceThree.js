// Write a arrow function which will do the following:
/*
1. Square each array element.
2. Calculate the sum of the squared elements
3. Return the average of the sum of the squared elements
4. Print the results
*/

const calc = (...elements) => {
  let sum = 0;
  for (let element of elements) {
    const square = Math.pow(element, 2);
    sum += square;
  }
  const average = sum / elements.length;
  return average;
};

const numbers = [2, 4, 6, 8, 10];
console.log(calc(...numbers));
