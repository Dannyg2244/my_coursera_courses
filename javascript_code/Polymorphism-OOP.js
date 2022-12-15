//examples of Object-oriented programming
const bicycle = {
    bell: function() {
        console.log("Ring, ring! watch out, please!");
    }
}
bicycle.bell()


const door = {
    bell: function() {
        console.log("Ring, ring! Come here, please!");
    }
}
door.bell()

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle)
ringTheBell(door)

console.log("abc".concat("def"))
console.log(["abc"] + ["def"])
console.log(["abc"].concat("def"))

class Bird {
    useWing() {
        console.log("flying!")
    }
}

class eagle extends Bird {
    useWing() {
        super.useWing()
        console.log("Barely flapping!")
    }
}

Bird.useWing()