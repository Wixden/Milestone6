const person = [
  {
    name: "rahim",
    age: 22,
    friends: ["rahim,karim,jabbar"],
  },
  {
    name: "rahim2",
    age: 22,
    friends: ["rahim,karim,jabbar"],
  },
  {
    name: "rahim3",
    age: 22,
    friends: ["rahim,karim,jabbar"],
  },
];

console.log(person.slice(1, 2));

const dreamGirl = [
  {
    sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [{ name: "rofik" }, undefined],
          },
        },
        { instagram: "https://www.instagram.com/" },
      ],
    },
  },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram);

// const obj = { a: 1, b: 7, c: 3, length: 2 };
// console.log(Object.keys(obj).length);
// What will be the output?(Try it out.)

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

// What would be the output of?:

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend());

// what would be the output?
let p = "Javascript";
let q = p;
p = "React";
console.log(q);

// What will be the output (be careful. And think about it)?

const isTrue = "false";
if (!isTrue) {
  console.log("hello");
} else {
  console.log("world");
}

// What will be the value of the result?

function sum(p, q) {
  p + q;
}
const result = sum(2, 3);
console.log(result);

// What would be the output from the code below?

if ("2" === 2) {
  console.log("Inside if");
} else {
  console.log("Inside else");
}


// What would be the output from the function below? 

function work(x, y = 4) {
 return x + y;
}
console.log(work(32);
