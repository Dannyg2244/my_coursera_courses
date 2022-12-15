/*var canyou = ["daniel", "gbenga", "olamilekan"]
console.log(canyou.length)
console.log(canyou[0])
console.log(canyou[1])

for (var i = 0; i < canyou.length; i++){
    console.log(canyou[i])
}*/

/*var greeting = "Howdy"
console.log(greeting.length)
console.log(greeting[0])
console.log(greeting[1])

for (var i = 0; i < greeting.length; i++){
    console.log(greeting[i])
}*/

var greet = "hello ";
var user = "Daniel ";
//console.log(  greet. pop()  );
console.log(greet + user)
console.log(greet.concat(user))// the concat method accepts whatever value i want to concat or join with the greet variable.
console.log(greet.length, user.length)
console.log(greet.charAt(1)) //  the charAt() function is used to read each individual character at a specific index in a string
//greet.charAt(o) output "h
console.log("wo".concat('rl').concat('d'))

//indexOf()function returns the location of the first position that matches a character
console.log("hello".indexOf('h'))
console.log("hello".indexOf('l'))
console.log("hello".lastIndexOf("o"))
console.log("hello".split("l"))
console.log("hello".toUpperCase())
console.log("HELLO".toLowerCase())
console.log((15).toString(100));