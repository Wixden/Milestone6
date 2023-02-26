const users = [{ id: 1, name: "User1", role: "Subscriber" }];

// To access an object property from an array
console.log(users[0].name);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "user1", role: "Administrator" },
    { id: 2, name: "user2", role: "Editor" },
    { id: 3, name: "user3", role: "Manager" },
  ],
  student: {
    id: 1,
    name: { firstName: "Jake", lastName: "Bennington" },
    address: {
      houseNumber: 12,
      street: "French Tails ST.",
      city: "New York",
      postCode: "FU34LR",
    },
    result: "Passed",
  },
};

console.log(data.data[1].name);

const studentHouseNumber = data.student.address.houseNumber;
// const studentHouseNumber = data.student?.Address?.houseNumber;

console.log(studentHouseNumber);
