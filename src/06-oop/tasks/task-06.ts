/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */

class Person {
    constructor(
        public name: string,
        public age: number
    ) {}

    showInfo(): void {
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public studentId: string,
        public grade: number
    ) {
        super(name, age);
    }

    study(): void {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    constructor(
        name: string,
        age: number,
        public employeeId: string,
        public subject: string
    ) {
        super(name, age);
    }

    teach(): void {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

const student = new Student(
    "Kylian Mbappé",
    17,
    "ST001",
    11
);

const teacher = new Teacher(
    "Cristiano Ronaldo",
    38,
    "EMP001",
    "Programming"
);

student.showInfo();
console.log("Student ID: " + student.studentId);
console.log("Grade: " + student.grade);
student.study();

console.log();

teacher.showInfo();
console.log("Employee ID: " + teacher.employeeId);
console.log("Subject: " + teacher.subject);
teacher.teach();
