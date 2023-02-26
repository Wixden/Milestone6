function add(first, second) {
  // First Option
  // if (second === undefined) {
  //   second = 0;
  // }

  // Second Option
  second = second || 0;

  const total = first + second;
  return total;
}
const result = add(10);
console.log(result);

//Third Option (ES6)
function sum(first, second = 0) {
  const total = first + second;
  return total;
}
const summation = sum(25);
console.log(summation);

function fullName(first, last = "Chowdury") {
  const name = first + " " + last;
  return name;
}
const name = fullName("Aslam");
console.log(name);
