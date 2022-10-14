let arr1 = [31, 74, 11, 8, 25, 11];
let arr2 = ['p', 'a', 'g', 'u', 'a'];
let str1 = ["The boy who lived"];
let bool1 = true;
let obj1 = {
    fname: "Bob",
    lname: "Wilkinson",
    age:57 
};

let newArr1 = arr1.splice(1, 3);
let newArr2 = arr2.splice(1, 3);
let newStr1 = str1.reverse();
let newBool1 = bool1.valueOf();
let newObj1 = obj1.age;
console.log(newArr1);
console.log(newArr2);
console.log(newStr1);
console.log(newBool1);
console.log(newObj1);

console.log(arr1.valueOf());
console.log(arr2.valueOf());
console.log(str1.valueOf());
console.log(bool1.valueOf());
console.log(obj1.valueOf());
