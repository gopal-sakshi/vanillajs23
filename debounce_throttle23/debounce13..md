The `debounce` function 
- delays the processing of the keyup event until the user has stopped typing for a predetermined amount of time.
- prevents your UI code from needing to process every event 
- drastically reduces the number of API calls sent to your server

`debounce` 
- a higher order function
- it limits the rate at which another function gets called.

A debounce 
- is a higher-order function, (ie a function that returns another function)
- This is done to form a closure around the func 
- and wait function parameters and the timeout variable so that their values are preserved
- Processing every character as it’s entered    
    bad performance
    unnecessary load to your backend.

`debounce_vs_throttle`
- debounce ====> use when you only care about the final state
- throttle ====> use when you want to handle all intermediate states but at a controlled rate

- debounce == waiting until a user stops typing
- throttle == 
<!-- ------------------------------------------------------------------------------------- -->

https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086

https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/

<!-- --------------------------------------------------------------------------- -->

`Debouncing`
- delay the execution of a function until after a certain amount of time has passed.
- scroll (or) click (or) resize event
    we dont want to trigger it too frequently
- If debouncing time is 2000 milliseconds after the user has ceased clicking, the function will be called 2000 milliseconds later.


`Throttle`
- Call the function immediately the first time.
- After each call, prevent the function from being called again for a certain time period.
- Once that time period has passed, the function can be called again.

