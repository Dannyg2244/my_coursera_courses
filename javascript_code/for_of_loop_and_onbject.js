const colors = ['red', 'yellow', 'pink', 'blue']
for(var color of colors){
    console.log(color);
}

const car2 = {
    color: "red",
    speed: 200,
}
    console.log(Object.keys(car2))
    console.log(Object.values(car2))
    console.log(Object.entries(car2))


    var clothingItem = {
        price: 50,
        color: 'biege',
        material: 'coton',
        season: 'autumn',
    }
    for(var goods of Object.keys(clothingItem)){
        console.log(goods, ":", clothingItem[goods])
    }

    function testBracketsDynamicAccess() {
        var dynamicKey = Math.random()
        > 0.5 ? "speed" : "color";
    var drone = {
        speed: 200,
        color: "orange"
    }
    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();