Web Workers
- background threads in JavaScript
- they execute code independently of the main thread


Web Workers operate in a different global context
not the familiar window. 
We call this special global context self
========================================================================================

Web Workers communicate with the main thread using events. 
By using events, they can send and receive messages or data. 
onmessage           typically gets messages or data from the main thread
postMessage         sends processed data from the Web Worker back to the main thread.
========================================================================================

best practices
- keep them lightweight (web workers dont have access to DOM)
    make API calls
    make complex CPU tasks - sort array, calculate fibonacci
    data processing, handle large datasets
- handle errors so webworkers dont crash main thread