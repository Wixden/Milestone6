// Task 1:
/**
 * Write an arrow function it will do the following:
 * 1. It will take an array where the array elements will be the name of your friends
 * 2. Check if the length of each element is even. push elements with even length to a new array and return the result.
 */

// My try:
// const friends = (name) => name.length % 2 === 0;

// const friendsList = ["Mike", "Jenny", "Bean", "John", "Amanda", "Jonah"];
// const even = friends(...friendsList);
// console.log(even);

// Help From ChatGPT
const friends = (friendList) => {
  const result = [];
  for (let i = 0; i < friendList.length; i++) {
    const friend = friendList[i];
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};

const friendsList = ["Mike", "Jenny", "Bean", "John", "Amanda", "Jonah"];
const even = friends(friendsList);
console.log(even);

// Using Spread operator
const friends2 = (...friendList) => {
  const result = [];
  for (let i = 0; i < friendList.length; i++) {
    const friend = friendList[i];
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};

const even2 = friends2("Mike", "Jenny", "Bean", "John", "Amanda", "Jonah");
console.log(even);
