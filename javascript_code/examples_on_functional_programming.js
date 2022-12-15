function getTotal(a, b) {
    console.log(a + b)
}
var num1 = 2
var num2 = 4
getTotal(num1, num2)

function getDistance(mph,  h) {
    console.log(mph * h)
}
var mph = 60
var h = 2
var distance = getDistance(mph, h)
console.log(distance)


/* example of Object-Oriented Programming */
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
//console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)

console.log(typeof(this))