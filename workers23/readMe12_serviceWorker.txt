ServiceWorker
- special type of WebWorker
- ability to interact with the browser's fetch events
- SWs intercept network requests and provide offline support and push notifications
- Scope 
    scope of SWs        == Dedicated thread that acts as a proxy between the browser and the network
    scope of WebWorkers = Dedicated thread that shares the same global context as the main thread
- Lifecycle 
    SWs         ===	Registered and activated by the browser
    WebWorkers  = Created and terminated by JavaScript code

https://www.dhiwise.com/post/web-workers-vs-service-workers-in-javascript

===================================================================
4 main duties of SWs

Offline Support: 
- SWs cache essential resources, such as HTML, CSS, JavaScript, images
- allowing the application to continue functioning even when the user is not connected to the internet. 
- This capability is vital for creating Progressive Web Apps (PWAs) 
- that provide a reliable user experience regardless of network conditions.

Background Synchronization: 
- Service Workers can facilitate background synchronization of data. 
- This is valuable for applications that need to periodically update data, 
    not just cache html/js files ===> but update them periodically when user is connected to internet
- ensuring that the user always has access to the latest information when online.

Push Notifications: 
- Service Workers have the ability to receive & display push notifications
- even when the web application is not open in the user's browser. 
- This feature is valuable for keeping users engaged and informed
    such as with news updates, chat messages, or social media notifications.

Resource Caching: 
- Service Workers can manage the caching of assets, 
- allowing developers to control which resources are stored locally and for how long. 
- optimizing the use of device storage and ensures that the application runs smoothly even in resource-constrained environments.
===================================================================