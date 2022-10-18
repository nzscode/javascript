let Apples = ["Red Delicious", "Bright Red", "Ontario"];
let Student = {
    fName: "Jack",
    lName: "Dawson",
    friend: "Fabrizio"
}
let harryQuote = "Ron!"

// //using for in
// for (let key in Apples){
// console.log(`for...in array => ${Apples[key]}`);
// };

// for (let key in Student){
//     console.log(`for...in Object=> ${Student[key]}`);
//     };
    
// for (let key in harryQuote){
//     console.log(`for...in String=> ${harryQuote[key]}`);
//     };
    
//using for
for (let i = 0; i < Apples.length; i++){
 console.log(`for array=> ${Apples[i]}`);
};

for (let i = 0; i < harryQuote.length; i++){
    console.log(`for String=> ${harryQuote[i]}`);
};

//using for of
for (let key of Apples){
    console.log(`for...of array => ${key}`);
    };

for (let key of harryQuote){
    console.log(`for...of String => ${key}`);
    };

//using for Each
Apples.forEach(key => {
    console.log(`${key}`);
});

Object.keys(Apples).forEach(key => {
    console.log(`${key}(index), ${Apples[key]}`);
});


Object.keys(Student).forEach(key => {
    console.log(`${key}, ${Student[key]}`);
});

Object.keys(harryQuote).forEach(key => {
    console.log(`${key}(index), ${harryQuote[key]}`);
});

