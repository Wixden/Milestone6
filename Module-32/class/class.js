class Instructor {
  name;
  role = "Web Instructor";
  team = "Design Team";
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  startQuiz(module) {
    console.log(`${this.name} started the quiz for module:  ${module}`);
  }

  startSession(time) {
    console.log(`${this.name} completed session before: ${time} pm`);
  }
}

const alan = new Instructor("Alan", "Japan");
console.log(alan);
alan.startQuiz(32);
alan.startSession("10.00");

const joe = new Instructor("Joe", "Canada");
console.log(joe);
joe.startQuiz(31);
joe.startSession("09.00");
