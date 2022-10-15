let Vegetable = {
    name: "",
    color: "",
    price: 0.00
};

let Vegetable2 = Object.create(Vegetable);
Vegetable2.name = "pumpkin";
Vegetable2.color = "orange";
Vegetable2.price = 3.43;

console.log(Vegetable2);

let Animal = {
    name : "",
    age: 3
    };
    
    let Dog = Object.create(Animal);
    Dog.name = "Spot";

    console.log(Dog);