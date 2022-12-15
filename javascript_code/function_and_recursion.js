/*function example() {
    console.log('line one')
    console.log('line two')
    console.log('line three')
}
example()*/



let counter = 0;
function example() {
    console.log(counter)
    counter = counter + 1;
    if (counter === 6) return;
    example();
}
example()