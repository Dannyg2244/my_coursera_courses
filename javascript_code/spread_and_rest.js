//Joining arrays, Objects using the rest operator

const fruit = ['apple', 'mango', 'orange', 'pawpaw'];
const berry = ['strawberry', 'blueberry'];
const fruitAndBerry = [...fruit, ...berry];
console.log(fruitAndBerry)

//joining Object

const flying = {wing: 2 }
const car = {wheel: 10 }
const flyingCar = {...flying, ...car}
console.log(flyingCar)

//Adding new members to the arrays without using push()method

const veggies = ['car', 'goat', 'pot'];
let veggy = [...veggies, 'motor', 'house'];
console.log(veggy)

// convert a string to an array using the spread operator

const greet = "Hello"
let greeting = [...greet];
console.log(greeting);

//Copy either an Object or an array into a separate one

const car1 = {
    speed: 100,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 200;
console.log(car1.speed, car2.speed)

const fruit1 = ['apple', 'mango', 'orange'];
const fruit2 = [...fruit1]
fruit1.pop()
console.log(fruit1)
console.log(fruit2)