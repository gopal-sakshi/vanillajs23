function calculateFibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2)
}

onmessage = function(msgDetails) {
    console.log(msgDetails);
    const result = calculateFibonacci(15);
    postMessage(result);
};


// ERRORS
    // Uncaught DOMException: Failed to construct 'Worker'... script cannot be accessed from origin 'null'
    // Reason ==> Chrome doesn't let you load web workers when running scripts from a local file.
    // local file:// load will have a null origin

    // Solution ===> use live server


/************************************************************************************ */


// fibonacci series =======> 
    // 1    1       2       3       5 
    // 8    13      21      34      55
    // 89   144     233     377     610
    // 987  1597    2584    4181    6765

// console.log(calculateFibonacci(5));
// https://r-knott.surrey.ac.uk/Fibonacci/fibtable.html

/************************************************************************************ */