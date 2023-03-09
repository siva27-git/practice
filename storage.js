// Three things in using local storage

// 1. Protocol --> http/https
// 2. port --> 8081, 8080
// 3. host or domain --> linkidin.com, localhost, paytm.com

// sets a item in local storage
// localStorage.setItem("siva", "avis")

//gets the value of siva from the local storage
// localStorage.getItem("siva")

// remove key and value siva from the local storgae
// localStorage.removeItem("siva")

// clears all things from local storage
// localStorage.clear()

let localStorage = require('node-localstorage').LocalStorage
localStorage = new localStorage('./localStorage');

// localStorage.setItem("siva", "hiiii")
// localStorage.setItem("avis", "hiiii")
let a = localStorage.getItem("siva")

console.log(a)
