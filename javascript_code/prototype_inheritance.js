var bird = {
    hasWing: true,
    canFly: true,
    hasFeather: true,
}
var eagle = Object.create(bird)
console.log("eagle:", eagle)
console.log("eagle can fly:", eagle.canFly)
console.log("eagle has wing:", eagle.hasWing)
console.log("eagle has feather:", eagle.hasFeather)

var eagle2 = Object.create(bird)
console.log("eagle2 has wing:", eagle2.hasWing)

var penguin1 = Object.create(bird)
penguin1.canFly = false,
console.log("penguin1: ", penguin1)

var turkey = Object.create(bird)
turkey.canSwim = false
console.log("turkey can swim:", turkey)