// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDiary() {
    for (dairy of dairy) {
        console.log(dairy);
    }
}
logDiary();
// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (birdy of Object.keys(bird)) {
        console.log(birdy + ": " + bird[birdy]);
    }
}
birdCan();

// Task 3

function animalCan() {
    for (allbird in bird) {
        console.log(allbird);
    }
}
animalCan()
