//factory function
// order tests

function createPc(brand, screenSize, type, CPU, Keyboard, Mouse){
    return {
        Monitor: {
            brand,
            screenSize,
            type,
        },
        CPU,
        Keyboard,
        Mouse,
    }
    
}

let c = createPc("samsung", 5.5, "curved", "generic", "generic", "generic")


console.log(c);
