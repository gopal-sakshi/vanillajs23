const worker11 = new Worker('fibonacci23.js');    // Create a new Web Worker using Worker()
worker11.postMessage(40);                         // Send data to the worker. Calculate the 40th Fibonacci number

worker11.onmessage = function (e) {
    console.log("The result is: ===> ", e.data);            // Receive data from the worker
    document.getElementById("fibo23").innerHTML = e.data
};

worker11.onerror = function (error) {
    console.error("Worker error: ===> ", error);              // Handle worker errors
};

/*****************************************************************************/
const worker12 = new Worker('array23.js');

const largeArray = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));
worker12.postMessage(largeArray);
 
worker12.onmessage = function (e) {
    console.log("Sorted array top 2 elem ===> ", e.data[999999], e.data[999998]);
};
/*****************************************************************************/

const worker13 = new Worker("apiCall23.js");
 
worker13.postMessage("https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json");
worker13.onmessage = function (e) {
    if (e.data.error) {
        console.error(e.data.error);
    } else {
        console.log("Fetched data: ====> ", e.data);
    }
};
/*****************************************************************************/

// SERVICE WORKER EXAMPLE
navigator.serviceWorker.register("serviceWorker24.js");


