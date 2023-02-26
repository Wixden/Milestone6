const person = "Alan White";
const person2 = "Mike Lewd";
const person3 = `John Doe`;

// Carret `` || Backtick
const a = 30;
const b = 20;
// const sum = "Sum of: " + a + " and " + b + " is: " + (a + b); //Old ways

const sum = `Sum of ${a} and ${b} is: ${a + b}`; //ES6 ways
console.log(sum);

// Multiline example
// Old ways
// const summary =
//   "Lorem ipsum dolor sit amet \n" +
//   "consectetur adipisicing elit. \n" +
//   "Fuga enim, tenetur rem itaque \n" +
//   "ducimus sapiente consequuntur \n" +
//   "quam porro et animi incidunt cum \n" +
//   "nemo praesentium quaerat nulla \n" +
//   "quia eum libero inventore.";

// New ES6
const summary = `Lorem ipsum dolor sit amet
consectetur adipisicing elit.
Fuga enim, tenetur rem itaque
ducimus sapiente consequuntur
quam porro et animi incidunt cum
nemo praesentium quaerat nulla
quia eum libero inventore.`;
console.log(summary);
