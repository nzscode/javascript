let student1 = {
    name: "Henry",
    age: 5,
    greet: function(){
        return `Hello ${this.name}, you are ${this.age} years old.`;
    }
};

let student2 = {
    name: "Tessa",
    age: 7
};


let greetStudent1 = student1.greet.bind(student1);
let greetStudent2 = student1.greet.bind(student2);

console.log(greetStudent1());
console.log(greetStudent2());

