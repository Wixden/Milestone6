// Instead of many blocks of codes we can use ternary for if else statement.
// Note: don't use multiple condition in ternary operator. only use for to check if value is true or false. no more than that

let paragraph = "";
let title = "";

let isTitle = true;
let isParagraph = true;

// Option One:
title = isTitle === true ? "This is a Title" : "This is not a Title";

// Option Two:
paragraph = isParagraph
  ? "This is a simple paragraph"
  : "This is not a simple paragraph";

console.log(paragraph);
console.log(title);
