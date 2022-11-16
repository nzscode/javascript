let Student = {
	name: "",
	age: 0
};

let student1 = Object.create(Student);
student1.name = "Josh";
student1.age = 9;

console.log(Student);
console.log(student1);
