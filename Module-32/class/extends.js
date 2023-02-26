class TeamMember {
  name;
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

class Instructor extends TeamMember {
  role = "Web Instructor";
  team = "Design Team";

  constructor(name, location) {
    super(name, location);
  }

  startQuiz(module) {
    console.log(`${this.name} started the quiz for module:  ${module}`);
  }

  startSession(time) {
    console.log(`${this.name} completed session before: ${time} pm`);
  }
}

const alan = new Instructor("Alan", "New York");
console.log(alan);

const natasha = new Instructor("Natasha", "Vegas");
console.log(natasha);
