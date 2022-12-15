/*for (var year = 2022; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month <= 10; month++){
        console.log(".............", month);
    }
}*/

/*for (var i = 2022; i < 2025; i++){
    console.log(i)
    for (var j = 1; j <= 10; j++){
        console.log("..............", j);
    }
}*/

/*for (var i = 0; i < 2; i++){
    for (var j = 0; j < 10; j++){
        console.log(i  +" times " + j + " equals " + i*j);
    }
}*/

/*for (var i = 100; i > 0; i = i - 10){
    for (var j = 10; j > 4; j = j - 5){
        console.log(i + " divide " + j + " equals " + i/j)
}
}*/

var card = 'ABCDEFGIJ';
for (var i = 0; i < card.length; i++){
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c"+ card[i], styles);
}