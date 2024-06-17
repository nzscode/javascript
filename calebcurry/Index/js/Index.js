let student1 = {
    name: "Bob"
};

let student2 = {
    name: "Harry"
};
  
let student3 = {
    name: "Jeff"
};
function hello(age, gender){
    console.log(age, gender);
    console.log(this);
}

hello.apply(student1.name, [6, "m"]);