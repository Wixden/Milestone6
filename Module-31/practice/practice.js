// Task 1:
/**
 * Write an arrow function which will take three parameters, will multiply the parameters and return the results.
 * **/

const total = (num1, num2, num3) => num1 * num2 * num3;

// Task 2:
/**
 *
 * Write the following in three lines and print the result. "I am a web developer. I love to code. I love to solve coding problem"
 *
 */

const threeLines = `I am a web developer
I love to code
I love to solve coding problem
`;

// Task 3:
/**
 * Write an arrow function that will take 2 parameters: 1 parameter will come from you and the other parameter will be a default parameter. Add these two parameter and return the result.
 *
 */

const taskThree = (firstName, lastName = "Silvester") =>
  firstName + " " + lastName;
const fullName = taskThree("Stallone");
