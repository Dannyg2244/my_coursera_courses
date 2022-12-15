function consumer(color, background, fontSize, text ) {
    message = "%c" + text
    style = 'color: ${color}';
    style += `background: ${background}`;
    style += `fontSize: ${fontSize}`;
    console.log(message, style)
}

function retailer(game) {
    if (game == 'very good') {
        console.log("welldone, you made it");
    } 
    else if (game == "good") {
        console.log("you almost got it!")
    } 
    else {
        console.log(message)
    }
}

    consumer('green', 'red', '40px', "Congratulations")
    retailer("very good")

function consumerAndRetailer(color, background, fontSize, text, game) {
    consumer(color, background, fontSize, text)
    retailer(game)
}

consumerAndRetailer('yellow', 'pink', '30px', "hurray!!", "good");
