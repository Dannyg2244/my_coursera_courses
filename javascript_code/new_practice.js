/*for (var i = 2000; i < 2004; i++){
    for (let j = 1; j < 6; j++) {
        console.log("this is the",j, "month", "in the year", i);
        
    }
}

var mongoPack = {
    fried: true,
    meat: function () {
        this.fried = false
    }
}

//console.log(mongoPack.fried)
mongoPack.meat()
console.log(mongoPack.fried)

//practice on function and recursion

var dude = 9;
function counter() {
    dude = dude - 1;
    console.log(dude);
    if (dude == 6) return;
    counter();
}
counter()*/

function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
console.log(meal.dog);
console.log(meal.food);

/*var globalVar = 77;
function scopeTest() {
    var localVar = 88
}
console.log(localVar)*/