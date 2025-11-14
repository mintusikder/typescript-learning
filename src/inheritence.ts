class Parent {
  name: string;
  age: number;
  grade: string;
  address: string;

  constructor(name: string, age: number, grade: string, address: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.address = address;
  }

  getSleep(numberOfHours: number) {
    console.log(`${this.name} ${numberOfHours} eto ghanta ghumbe`);
  }
}

// Inherits everything from Parent
class Student extends Parent {}

const student1 = new Student("John Doe", 16, "10th Grade", "123 Main St");
student1.getSleep(15);
console.log(student1.name);


// Teacher class
class Teacher extends Parent {
  designation: string;

  constructor(
    name: string,
    age: number,
    grade: string,
    address: string,
    designation: string
  ) {
    super(name, age, grade, address);
    this.designation = designation;
  }

  tekeClass() {
    console.log(`${this.name} class nibe`);
  }
}

const teacher1 = new Teacher(
  "Jane Smith",
  30,
  "10th Grade",
  "456 Elm St",
  "Math Teacher"
);

teacher1.getSleep(8);
teacher1.tekeClass();
