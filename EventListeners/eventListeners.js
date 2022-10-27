let arr = [1,2,3];
let obj2 = {
   fName : "Bob",
   lName : "Zob",
   age: 97
};

let obj3 = {
    fName : "Bob",
   lName : "Zob",
   age: 97,
   printThis: printThis
};

function printThis(){
    return `this has been printed: ${this}`;
}

console.log(obj3.printThis());