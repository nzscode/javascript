let healthPotion = {
    name: "Health Potion",
    power:5
};

/*let Inventory = [
    healthPotion, healthPotion
];*/

let hero = {
    //hero_Inventory: Inventory,
    name: "Hero",
    inventory: [healthPotion, healthPotion],
    hero_Health: 90,
    maxHitPoints: 10, //Damage I can do
    minHitPoints: 5, //Damage I can do
    QuitDamageLimit: 10,
    Level:1
}

let enemy = {
    name: "Enemy",
    enemy_Health: 100,
    maxHitPoints: 10, //Damage I can do
    minHitPoints: 5, //Damage I can do
    Level:1
}



console.log(hero.inventory);