function throttle49(func, delay) {
    let timeout = null;
    return (...args) => {
        if(!timeout) {
            func(...args)
            timeout = setTimeout(() => {
                timeout=null
            }, delay)
        }
    }
}

const throttleChesko = throttle49(() => {
    console.log("button click cheyyatam jarigindi ", new Date().toISOString());
}, 2000);

// https://www.freecodecamp.org/news/throttling-in-javascript/