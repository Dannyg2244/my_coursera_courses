/*var house1 = 'red'
var house2 = 'yellow'
var house3 = 'green'
const houses = new Set()
houses.add(house1).add(house2).add(house3);
console.log(houses);

// The code below is the syntax for forEach() method for working with arrays in Javascript
const fruit = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index} ${fruit}`);
}
fruit.forEach(appendIndex)

const veggies = ['garlic', 'onions'];
veggies.forEach(function (veggies, index) {
    console.log(`${index} ${veggies}`)
})

// The code above is the syntax for forEach() method for working with arrays in Javascript


// The filter() methods filter arrays based on a specific test
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
    console.log(num > 20)
})

// The map() method is used to map each array item over another array's items
[0, 10, 20, 30, 40, 50].map( function(num) {
    console.log(num*10)
})


//working with Object in Javascript

var pole = ['egg', 'hen', 'lop', 'klen'];
pole.forEach( function (pole, index) {
    console.log(`${index} ${pole}`)
});


var pear = [10, 20, 30, 40, 50, 60, 70, 80, 90];
pear.filter(function (num) {
    console.log(num >= 30)
})*/


//working with Object in Javascript

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKey = Object.keys(drone)
droneKey.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result)
drone.find()


//Working with Map in Javascript

new Map();
const bestBoxer = new Map();
bestBoxer.set(1, "The champion");
bestBoxer.set(2, 'The Runner-Up');
bestBoxer.set(3, 'The Third Place');
console.log(bestBoxer)

//Working with Set in Javascript

new Set();
const computer = ['radio', 'television', 'hand-set', 'decoder'];
const appliances = new Set(computer)
console.log(appliances)