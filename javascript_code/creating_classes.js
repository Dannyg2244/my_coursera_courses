/*class Train {
    constructor (color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn        //this keyword here represent the future object of the train class
    }
}
var myFirstTrain = new Train("red", false)
console.log(myFirstTrain)
var mySecondTrain = new Train("yellow", true)
var myThirdTrain = new Train("blue", true)
console.log(mySecondTrain)
console.log(myThirdTrain)*/

class Train {
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLight() {
        this.lightsOn = !this.lightsOn
    }
    lightStatus() {
        console.log('Lights on?', this.lightsOn)
    }
    getSelf() {
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}
/*var myDesign = new Train("blue", false)
//console.log(myDesign)
myDesign.toggleLight()
myDesign.lightStatus()
myDesign.getSelf()
myDesign.getPrototype()
//console.log(myDesign)*/


class HighSpeedTrain extends Train {
    constructor(passenger, highSpeedOn, color, lightsOn) {
        super(color, lightsOn)
        this.passenger = passenger
        this.highSpeedOn = highSpeedOn
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log("High speed Status:", this.highSpeedOn)
    }
    toggleLight() {
        super.toggleLight();
        super.lightStatus();
        console.log("Light are 100% operational.")
    }
}
var train = new Train("blue", true)
console.log(train)
var train1 = new Train('red', false)
var train2 = new Train('red', false)
var train3 = new Train('blue', true)
train3.toggleLight()
train3.lightStatus()
train3.getSelf()
train3.getPrototype()
var highSpeed1 = new HighSpeedTrain(200, true, 'red', false)
console.log(highSpeed1)