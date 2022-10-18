let Apples = ["Red Delicious", "Bright Red", "Ontario"];
let Student = {
    fName: "Jack",
    lName: "Dawson",
    friend: "Fabrizio"
}
let harryQuote = "Ron!"
    

//using for of
for (let key of Apples){
    console.log(`${Apples.indexOf(key)},  ${key}`);
    };

for (let key of harryQuote){
    console.log(`${harryQuote.indexOf(key)}, ${key}`);
    };
