// This gonna log out a Promise in the console
// There're 2 ways to work with promises: .then and async/away

const API_URL = 'https://jsonplaceholder.typicode.com/users/1'
const userEmail = document.querySelector(".email")
console.log(fetch('https://jsonplaceholder.typicode.com/users/1'))

// Then how we're gonna unclock what is it inside this Promise?
// First we can use the .then(). And this gonna returns something different than just a Promise object
// We'll receive a Response object from the back-end

// 1. Then
// fetch(API_URL).then(response => {
//     // And to make this Response object readable for the front-end, we need to wrap it in the .json() method
//     // This .json() is gonna convert data from the back-end to readble and convertable data for the front-end
//     // After we'll get the convertable back-end data transferred via the API to our front-end
//     // console.log(response.json())

//     // But that's not all we need to also crack this response promise one step further
//     // We'll get a beautiful unclocked data fetched from the database via the API
//     response.json().then(data => {
//         console.log(data)
//     }) 
// })

// To summarize


// 1. Then

// Fetch data (it's a promise). Then we unlocked the data with json(). And then we do something with it
// fetch(API_URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         userEmail.innerHTML = data.email
//     })

// 2. Async/Await

// All you need to do is await the promise. This make the way to handle promises more clean, there's no .then()
async function getUserEmail() {
    const response = await fetch(API_URL)
    const data = await response.json()
    // Then do something with the unclocked data
    userEmail.innerHTML = data.email
} 