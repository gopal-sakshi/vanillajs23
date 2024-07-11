debounce23 ==
- Returns a function, that, as long as it continues to be invoked, will not be triggered. 
- The function will be called after it stops being called for `wait` milliseconds.

func:       The function that you want to execute after the debounce time
wait:       The amount of time you want the debounce function to wait after the last received action before executing func. 
                For our typeahead example, it would be the amount of time to wait after the last key press.
timeout:    The value used to indicate a running debounce.

================================================================================


wrapping any interaction
- that triggers excessive calculations or API calls
- with a debounce