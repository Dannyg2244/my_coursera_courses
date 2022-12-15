var purchase1 = {
    shoe: 100,
    stateTax: 1.2,
    totalAmount: function() {
        var calculation = purchase1.shoe * purchase1.stateTax;
        console.log("Total Amount:", calculation);
    }
}
purchase1.totalAmount()


var purchase2 = {
    shoe: 50,
    stateTax: 1.2,
    totalAmount: function() {
        var calculation = this.shoe * this.stateTax;
        console.log("Total Amount:", calculation);
    }
}
purchase2.totalAmount()


/**functional programming */
var shoe = 100;
var stateTax = 1.2

function totalPrice(shoe, stateTax) {
    return shoe * stateTax;
    //console.log(totalAmount)
}
var calculation = totalPrice(shoe, stateTax)
console.log(calculation)