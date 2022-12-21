/*********************** Utility functions ************************** */
var webWorker = {};

const msgRcvdFromWorkerBhayya = (workerResponse) => {
    console.log('hammayya, worker edo msg pampindi ', workerResponse);
    document.getElementById('fibonacciResults').innerHTML = workerResponse.data;
}

const fn23 = () => {
    // user clicked on button... this fn23 callback fn is getting executed
    webWorker = new Worker('./js23/07_fibonacci.js');
    
    // adding callback functions
    webWorker.onmessage = msgRcvdFromWorkerBhayya;
    webWorker.onerror = errRcvdFromWorkerBhayya;

    // sending a message to worker
    webWorker.postMessage({
        time: Date.now(),
        msg: 'pani cheyyara'
    });
};

const fn24 = () => {
// if user presses cancel button
    // webWorker.terminate();
}

/***************************************************************************** */
document.getElementById('getFibonacci').addEventListener('click', fn23);
document.getElementById('cancelFibonacci').addEventListener('click', fn24);
/******************** LATER *****************************************/
const errRcvdFromWorkerBhayya = function(error) {
    console.log('error from webWorker23');
    console.log(error);
}

// webWorker.addEventListener('message', function(evt) {
//     console.log('whatsupp');
// });


/******************** LATER *****************************************/