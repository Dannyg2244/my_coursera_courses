//Object literal and dot notations

var table = {
    legs: 23,
    color: 'brown',
    priceUSD: 100,
    tea: 'coffee',
    house: "duplex",
    table,bowel: 30,
}
console.log(table);

// alternative way of building object

var table = {};
table.leg = 23;
table.color = "red";
table.priceUSD = 1000;
table.tea = "coffee";
table.house = "duplex";
console.log(table)

/*you can actually use the above syntax or the one below. they are actually the same */

var house = {};
house["cupboard"] = 'white';
house["room"] = 4;
house["priceUSD"] = 12345;
house["scandal"] = 21;
house.bucket = 32;
house["number of door"] = 7;
house["2022"] = 1901;
console.log(house)

var arrOfKeys = ['speed', 'altitude', 'color']
var drone = {
    speed: 200,
    altitude: 100,
    color: "red"
}
    for (var i = 0; i < arrOfKeys.length; i++){
        console.log(drone[arrOfKeys[i]])
    
}