/**
 * Follow below array of object. So, you have 3 objects as array element.
 * Find out the total sum from here. (57)
 * Do it using for loop as well as array.reduce() method
 */

const people = [
  { name: "Meena", age: 20 },
  { name: "Rinaa", age: 15 },
  { name: "Suchorita", age: 22 },
];

function ageSum(arr) {
  let sum = 0;
  for (p of arr) {
    sum += p.age;
  }
  return sum;
}
const doReduce = people.reduce((prev, curr) => prev + curr.age, 0);

console.log(ageSum(people));
console.log(doReduce);
