/* Node.js is single threaded.
It provides hidden multi threads through libuv library
libuv handles i/o operations like reading files from disk and network requests
Through this libuv libraray, nodejs allows  to do asynchronous operations 
without blocking the main thread. */

/* Since javascpit is single threaede, it blocks the main thread if any cpu intensive task
sunch as complex calculatio, vidio compression is running */

/* To use the remaining cores, js introduces worker-thread module */

// promises don’t make JavaScript code execute in parallel and cannot be used to make CPU-bound tasks non-blocking.




