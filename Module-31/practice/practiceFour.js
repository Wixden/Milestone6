// Write an arrow function which will do the following:
/*
1. It will take two array inputs
2. Combine these two array and assign them in a new array
3. Find the maximum number from the new array and return the result.
*/

const findMax = (arr1, arr2) => {
  const arrCombination = [...arr1, ...arr2];
  const maxNumber = Math.max(...arrCombination);
  // console.log(arrCombination);
  return maxNumber;
};

const numbers1 = [1, 2, 3, 4, 5, 6, 17];
const numbers2 = [8, 9, 10, 11, 12, 13];

console.log(findMax(numbers1, numbers2));
