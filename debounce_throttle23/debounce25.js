function debounce44( callback23, delay ) {
    let timeout;                    
    return function anon23() {
        clearTimeout(timeout);
        timeout = setTimeout(callback23, delay );
    }
}

/*
    callback23      the function that needs to be limited the number of times it executes.
    delay           time (in milliseconds) that needs to elapse before callback can execute again.

    timeout         holds the timeoutID returned when we call setTimeout later 
    anon23 fn       closure over timeout (so we can retain access to it)
    
    each time we call/invoke our debounce function
    - timeout is reset
    - new timeout is created
*/