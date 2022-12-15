// Function Call in Javascript

/*function addtwonum(a, b) {
    var c = a + b;
    console.log(c);
}
addtwonum(2, 2);
addtwonum(4, 7);
addtwonum(30, 80);


function multwonum(a, b) {
    var c = a * b;
    console.log(c);
}
multwonum(2, 2);
multwonum(4, 7);
multwonum(30, 80);
*/

/*function listarrayitems(arr) {
    for (var i = 0; i < arr.length; i++){
         console.log(i, arr[i]);
    }
}
var colors = ['white', 'yellow', 'blue', 'green', 'pink', 'purple', 'red', 'violet'];
listarrayitems(colors);
var food = ['rice', 'beans', 'yam', 'fufu', 'eba', 'semo', 'burger', 'indomie'];
listarrayitems(food)*/

// adding one or more condition to function

function listarrayitems(arr){
    for (var i = 0; i < arr.length; i++){
        if ( arr[i] == "green"){
            console.log(i * 20, "NIGERIA")
        }
        else{
            console.log(i * 20, arr[i]);
        }
    }
}

var colors = ['white', 'yellow', 'blue', 'green', 'pink', 'purple', 'red', 'violet'];
listarrayitems(colors)