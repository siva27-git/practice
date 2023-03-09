/* With the help of libuv async non-blockng made possiblein nodejs
Two main used in libuv are
1. Thread pool
2. Event loop
 */

/* 
Thread Pool

1. Default thread pool size is 4
 */





Promise.resolve().then(()=> console.log("Promise 1"))
process.nextTick(() => console.log("next Tick 1"))
Promise.resolve().then(()=> console.log("Promise 2"))
process.nextTick(() => console.log("next Tick 2"))



