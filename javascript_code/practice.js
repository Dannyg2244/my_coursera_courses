// practicing some examples on functions and arrays
function matchingword(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i]  == match){
            console.log("the word", match, "matches ", word[i]);
        }
        else {
            console.log("the word", match, "does not match", word[i])
        }
    }
}

matchingword("Dannygenius", "n");

//practicing example on objects and arrays

var arrOfHouse = ['bungalow', 'duplex', 'room', 'selfcontain', 'color']
var house = {
    bungalow: 10,
    duplex: 20,
    room: 30,
    selfcontain: 40,
    color: "red",
}
for (var i = 0; i < arrOfHouse.length; i++){
    console.log(house[arrOfHouse[i]])
}

function built(p, t, r){
    var arr = [];
    arr.push("one");
    arr.push("two");
    arr.push("three")
    console.log(arr);
}
built();


