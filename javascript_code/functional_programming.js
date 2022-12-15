// working on functional programming

var currencyOne = 100
var currencyTwo = 0;
var exchangeRate = 1.2
function convertCurrency(price, amount) {
    return price * amount
}

currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)

/* Return Value From Function */


//console.log('Hello');

function consoleLog(val) {
    console.log(val)
    return (val)
}
    consoleLog('Hello')


    function doubleIt(num) {
        return num * 2
    }
    function objectMaker(val) {
        return {
            prop: val
        }
    }

    objectMaker(20)