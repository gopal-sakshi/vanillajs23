// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce23 = (func, wait) => {
    let timeout;

    // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass
    return function executedFunction(...args) {

        // The callback function to be executed after 
        // the debounce time has elapsed
        const later = () => {
            // null timeout to indicate the debounce ended
            timeout = null;

            // Execute the callback
            func(...args);
        };
        // This will reset the waiting every function execution.
        // This is the step that prevents the function from
        // being executed because it will never reach the 
        // inside of the previous setTimeout  
        clearTimeout(timeout);

        // Restart the debounce waiting period.
        // setTimeout returns a truthy value (it differs in web vs Node)
        timeout = setTimeout(later, wait);
    };
};

/**********************************************************************************/
var returnedFunction23 = debounce23(function() {
    console.log("debounce chestunna -- aagu");
}, 2000);

var returnedFunction24 = debounce23(function(event) {
    console.log("oka 2 seconds ayyaka api call cheyyi");
    console.log("user enter chesina VENTANE cheyyaku ", event)
}, 2000);

var returnedFn25 = debounce23(function(event) {
    console.log("input field value changed roi ===> ", event.target.value)
}, 2000);
/**********************************************************************************/

window.addEventListener('resize', returnedFunction23);
document.getElementById('button23').addEventListener('click',returnedFunction24);
document.getElementById('inputField24').addEventListener('keyup',returnedFn25);
