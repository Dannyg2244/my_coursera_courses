class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}
class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}
class Gym {
    constructor(openhrs, stationaryBikePos, treadmillPos) {
        this.openhrs = openhrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}
var boxingGym = new Gym("7-22", "right corner", "left corner")
console.log(boxingGym.openhrs)
console.log(boxingGym.stationaryBike)
console.log(boxingGym.treadmill)