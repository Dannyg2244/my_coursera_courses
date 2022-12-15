function noDefaultParams(number = 10) {
    console.log(number * number)
}
noDefaultParams()

/*class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.string1 = string1
        this.bool1 = bool1
    }
    calculate() {
    if(this.bool1){
        console.log(this.string1,this.num1 + this.num2 + this.num3)
        return;
    }
    console.log("the value of bool1 is incorrect");
}
}
var params = new NoDefaultParams(2 ,4, 5, "Daniel", true)
params.calculate()*/


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
    if(this.bool1){
        console.log(this.string1,this.num1 + this.num2 + this.num3);
        return;
    }
    console.log("the value of bool1 is incorrect");
}
}
var params = new WithDefaultParams();
params.calculate();