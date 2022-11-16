let car = {
    color: "blue",
    year: 2011
}

car["shade"] = car["color"];
delete car["color"];

console.log(car);