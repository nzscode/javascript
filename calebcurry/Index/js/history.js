//Functions are Objects
{
    // function colorfy(num){
    //     num = "Tom";
    //     console.log(num);
    // }
    // let color = "Yellow";
    // console.log("before function: " + color);
    // colorfy(color);
    // console.log("after function: " + color);
    
    // function fruitification(arr){
    //     arr[1] = "Watermelon";
    //     console.log(arr[1]);
    // }
    
    // let fruits = ["apple","orange","kiwi"];
    // console.log("before function: " + fruits[1]);
    // fruitification(fruits);
    // console.log("after function: " + fruits[1]);
    }
    //CallBack with Prompt
    
    // {    function getName(){
    //         let myName = prompt("What is your name");
    //         console.log(myName);
    //         getAge();
    //     };
    
    //     getName();
    
    //     function getAge(){
    //         let myAge = prompt("How old are you?");
    //         console.log(myAge);
    //     };}
    
    //Treating Functions Like Objects
    
    /*{    function myName(name){
            let newName = prompt("What is your name?");
                return `Your name is ${newName}`;
        };
    
        //Adding function to an Array
        let studentBio = [myName];
        console.log(studentBio[0]());
    
        //Adding function to an Object
        let studentInfo = {
            studentName: myName
        }
        console.log(studentInfo.studentName());
    
        //Add properties to a function
        myName.initials = "T. S.";
        console.log(myName.initials);
            
        //As a CallBack
        function welcomeStudent(myName){
            console.log(myName());
    
        }
        welcomeStudent(myName);
    }*/
    
    function askColor(){
        let yourColor = "green";
        return `So, ${yourColor}, is your favorite color? Cool!`;
    };
    
    function askName(){
        let yourName = "Robert"
        return `Welcome ${yourName}, it's lovely to meet you!`;
    }
    
    function greet(){
        console.log(askName(), askColor());
    }
    
    (greet());
    
    function add(a,b){
        return a+b;
    }
    
    function multiplySum(){
        return add;
    }
    
    console.log(multiplySum()(2,3));



    let person = {};

for (let i=0; i<2;i++){
    getName(getAge);
    
}



function getName(callback){
    let newName = prompt("What is your name?");
    console.log(`Your name is ${newName}`);
    let personName = newName;
    person.personName;
    //names.push(newName);
    callback();
    
}

function getAge(){
    let newAge = prompt("How old are you?");
    console.log(`You are ${newAge} years old`);
    let personAge = newAge;
    person.personAge;
    //ages.push(newAge);
};



    /*2*///fullNames=[];
        /*3*/ fullNames= {};
/*1*/function getFullName(fName, lName){
        /*3*/let introFullName = `The first name is ${fName}, the last name is ${lName}`;

            /*4*/if(introFullName in fullNames){
                console.log("found");
                return fullNames[introFullName];
                
            }
/*1*/let fullName = fName + " " + lName;
    /*2*/// fullNames.push(fullName);    
        /*3*/   fullNames[introFullName] = fullName
    /*2*/console.log(fullNames);
/*1*/return fullName;
}
    /*2*/getFullName("Bob", "Wok");
getFullName("Ruby", "Bless");
getFullName("Bob", "Wok");
getFullName("James", "Plumb");

            preferredColors = {};
function favColor(){
    let favColor = prompt("What is your fav color?");
    let favSeason = prompt("What is your favorite season?");
            let printColor = `Color`;
            let printSeason = `Season`;
    let seasonColor = favColor + " " + favSeason;
            preferredColors[printColor] = favColor;
            preferredColors[printSeason] = favSeason;
    console.log(seasonColor);
    
    return seasonColor;

}

favColor();
console.log(preferredColors);

person = {};
people = [];
function getName(){
    //getting user input and assigning to a variable
    let fName = prompt("What is your first name?");
    let lName = prompt("What is your last name?");
    let personAge = prompt("How old are you?");
    let favMovie = prompt("What is your favorite movie?");
        // declare variable for key name = keyName;
        let firstName = "First Name";
        let lastName = "Last Name";
        let age = "Age";
        let movie = "Movie";
            //Initializing each key to a value
            person[firstName] = fName;
            person[lastName] = lName;
            person[age] = personAge;
            person[movie] = favMovie;
}
function printInfo(){
for (let i=0; i<3; i++){
    getName();
    people.push(person);
   
} }

printInfo();
console.log(people);



/*let people = [
    {   id : 0,
        fname: "Jim",
        lname: "Bob",
        age: 40,
        city: "Ajax"
    }
];

function getPerson(a){
    
    let getID= a;
    let getfName = prompt("First Name: ");
    let getlName = prompt("Last Name:");
    let getAge = prompt("Age:");
    let getCity = prompt("City:");

        let keyID = "id";
        let keyfName = "fname";
        let keylName = "lname";
        let keyAge = "age";
        let keyCity = "city";
        
            people[keyID] = getID;
            people.person[keyfName] = getfName;
            people.person[keylName] = getlName;
            people.person[keyAge] = getAge;
            people.person[keyCity] = getCity;

            console.log(this);
};

getPerson(1);
console.log(people);
console.log(people[1]);*/

let pets = [
    {type: "cat",
    name: "Mr. Meow",
    age: 2,
    city: "Ajax"
    }
];

function pet(type, name, age, city){
    this.type = type,
    this.name = name
    
    
}

pets.push(new pet("cat", "Ms. Whiskers", 3, "Peterborough"));
pets.push(new pet("dog", "Bowwa", 5, "LA"));

console.log(pets);

console.log(pets[1]);

let shoppingList = {
    type: "vegetable",
    name: "onion",
    quantity: 3,
    printList: function(){
        console.log(this /*this object called shopping list */ );
        console.log(this.name); //onion
    }
};
shoppingList.printList();

                let NailPolish={
                    color: "blue",
                    shimmer: "true",
                    quantity: 1,
                    printNailPolish: printNailPolish
                }
                function printNailPolish(){
                    console.log(this);
                    console.log(this.color);
                    //applies to the object where it is a method
                }
                NailPolish.printNailPolish();

let dog ={
    name: "doggy",
    color: "black",
    printAnimal: printAnimal
}

let cat={
    name: "kitty",
    age: 2,
    color:"orange",
    printAnimal: printAnimal
}

function printAnimal( ){
    console.log(this);
}
dog.printAnimal();
cat.printAnimal();

                function addBook(title, author, pages){
                    this.title = title;
                    this.author = author;
                    this.pages = pages;
                    Books.push(this);
                }

                let Books = [];
                //Using a constructor
                new addBook("Harry Potter", "J.K. Rowling", 342);
                new addBook("Lord of The Rings", "J.R. Tolkien", 543);

                console.log(Books);



function objName(value1){
        this.key1 = value1;
        this.key2 = "value2";
        console.log(this);
    }
let list = [];
list.push(new objName("value-1"));
list.push(new objName("potatoes"));
console.log(list);




 
