// === DEFINITION OF A PROMISE
console.log("Promise is something gives you a rejected value or a resolved value some time in the future.")

// === CREATE A PROMISE
function getSubscriptionStatus() {
    // This is how to create promise, and it accepts either resolve or reject
    return new Promise((resolve, reject) => {
        // Mimick the response duration with setTimeout
        setTimeout(() =>{
            resolve("VIP")
        }, 1000)
    })
}

// Then how we gonna unlock this promise and use it?
// We either use async await or then to work with it

const subscriptionStatus = document.querySelector(".status")

// === Async-Await
async function main() {
    const status = await getSubscriptionStatus()
    subscriptionStatus.innerHTML = status
}
main()

// === Then
getSubscriptionStatus().then(response => console.log(response))

// We don't need to use json() because our code is still in the front-end
// We only use json() to convert back-end response in the front-end

