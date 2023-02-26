const student = {
  id: 1,
  name: "John Doe",
  age: 12,
  class: "Seven",
  marks: {
    math: 84,
    physics: 89,
    chemistry: 98,
  },
};

const marks = student.marks;
console.log(marks);

const physics = student.marks.physics;
console.log(physics);

const chemistry = student["marks"]["chemistry"];
console.log(chemistry);

const subject = "math";
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
