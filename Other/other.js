function printThis(name){
    console.log(name);
    console.log(this);
}

printThis.apply("this", ["Jenna"]);