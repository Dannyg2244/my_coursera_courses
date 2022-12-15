var result = null;
console.log(result)

try {
    throw new Error()
    console.log("hello")
} catch (e) {
    console.log("goodbye")
}

var x;
if (x === null){
    console.log("null")
}else if(x === undefined){
    console.log("undefined")
}
else{
    console.log("ok")
}

var p;
console.log(p)

//throw new Error();
console.log("hello");

var str = "Hello";
str.match("jello");

try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("there was an error")
}