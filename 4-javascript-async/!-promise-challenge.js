const emailHTML = document.querySelector(".email")
const statusHTML = document.querySelector(".status")
const videosHTML = document.querySelector(".videos")


// USE THE PROMISE OF ANOTHER SOURCE
const API_URL = 'https://jsonplaceholder.typicode.com/users/1'
async function getUserEmail() {
    const response = await fetch(API_URL)
    const data = await response.json()
    // Then do something with the unclocked data
    userEmail.innerHTML = data.email
} 

// CREATE A PROMISE
function getSubscriptionStatus() {
    // This is how to create promise, and it accepts either resolve or reject
    return new Promise((resolve, reject) => {
        // Mimick the response duration with setTimeout
        setTimeout(() =>{
            resolve("VIP")
        }, 1000)
    })
}

// CREATE A PROMISE
function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show Videos")
        } else if (subscriptionStatus === "FREE") {
            resolve("Show Trailers")
        } else {
            reject("No Video")
        }
    })
} 

// EXECUTE THE PROMISE
async function main() {
    const status = await getSubscriptionStatus()
    // If you want to use the error we get from the back-end, we use try and catch
    try {
        await getUserEmail()
        videosHTML.innerHTML = await getVideo(status)
    }
    catch (e) {
        console.log(e)
        videosHTML.innerHTML = e    
    }
}