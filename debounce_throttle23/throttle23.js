function throttle23(func23, delay) {
    return () => {
        func23()
    }
}

const myFn23 = () => { console.log("na peru myFn23"); }
throttle23(myFn23, 2000)();
