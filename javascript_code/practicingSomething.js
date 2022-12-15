var grade = [70, 71, 72, 73, 74, 75, 76, 77];
var gradeSum = 0;
for (let index = 0; index < grade.length; index++) {
    gradeSum += grade[index];
}
console.log(gradeSum / grade.length);

function concatString(strA, strB) {
    console.log(strA + strB);
}
concatString("dan", "iel");
concatString(1, 2);
concatString(12345, 67890)

var mop = {
    sop: "add",
    cap: "map",
    dem: "far",
    lop: "get"
}
var gin = Object.create(mop)
gin.bin = "you"
console.log(gin)
for (var fin of Object.keys(mop)){
console.log(fin, ":", mop[fin])
}
var result = 0
for(var i = 0; i < 5; i++){
    result += 2
}
console.log(result)