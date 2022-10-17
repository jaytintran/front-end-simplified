#### 1: Different between let vs var
- Scope: let has a block scope, var has function scope
- Hoisting: var gets hoisted (can be called before initialization), let doesn't get hoisted
- ES6: let was introduce in ES2015/ES6, var was there in the start

#### 2: Different between == vs ===
- == compares values
- === compares values & data types

#### 3: Different between let & const
- let can be reassigned
- const can't be reassigned, because it's a constant

#### 4: Different between undefined and null
- Initialized but without value => that varible auto gets an undefined value
- Null is set by intend by the developers to indicate a purpose
    + Undefined => typeof undefined
    + Null => typeof object

#### 5: How can you improve web performance?
- Optimize images (< 100kb)
- Lazy load images (load after content)
- Lazy load components (load them only we need, not beforehand)
- Minify HTML, CSS and JS
- Improve API response time
- Utilize con-current HTTP request with Promise.all

#### 6: What is "this" keyword?
- "this" keyword is used to refers to the object that owns it
- If it stands alone, it indicates the global window object
- If it in a function, it indicates the global window object, in strict mode it indicates undefined

#### 7: Different between arrow function vs normal function
- Arrow function doesn't have their own "this", and they do not have the arguments object

#### 8: Function declaration vs expression
- Function declaration can be hoisted, while expression can't
```js
function funcE() {} // hoisted - can be called before initialization
const funcD = function() {} // not hoisted
```

#### 9: setTimeout()

```js
setTimeout(() => {
    console.log('a')
}, 0)

console.log('b')
console.log('c')
console.log('d')

// The result will be
b
c
d
a
```

- What's going deeply behind this is: for JS to execute, it compiles using something called the **Event Loop** - it helps JS to prioritize which gets executed first.
- The setTimeout will from the stack to an web api processor and back to the task queue, but it only enters back to the stack after the stack finished execute other code before it.
- Therefore the setTimeout gets putted onto the last position for executing.

#### 10: Callbacks
- Callback is a function that takes another function as an argument,
- A callback is a function that you pass inside another function and this inner function won't be executed right away, but later time based on some specific condition, whether through a setTimeout, click event, or outside critirials. 
- Something that was meant to be replaced by JS Promises. Which is a bit more complicated and harder than JS Promises.

```js
function sumCallback(a, b, callback) {
    callback(a + b)
}

function handleSum(sum) {
    console.log(sum)
}

sumCallback(1, 2, handleSum)
```

```js
const button = document.querySelector("button")
addClickEvent(button, () => {
    console.log("clicked")
})
function addClickEvent(element, callback) {
    element.addEventListner("click", callback)
}
```

```js
function printVariable(variable) {
	console.log(variable)
}

function callBackPrint(name, callback) {
	callback("Hello " + name)
}

callBackPrint("Tin", printVariable)
```

```js
const userLeft = false
const userWatching = false

let watchTutorialCallback = (callback, errorCallback) => {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        }) 
    } else if (userWatching) {
        errorCallback({
            name: 'User Watching',
            message: 'JS Mastery'
        })
    } else {
        callback('Thumbs up and subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
```

- Now let's look at the **promise** version of the exact same code above.

```js
let watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            }) 
        } else if (userWatching) {
            reject({
                name: 'User Watching',
                message: 'JS Mastery'
            })
        } else {
            resolve('Thumbs up and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
```

#### 11: Promises
- Promise is just a better version of callback. They are basically going to execute some code, if they succeed they will fulfill their **promise** and return the **result** of that promise, or they fail their promise, tthey will return a **rejection**.
- Just like in real life, what you do is to commit to something by promising you'll do it. Then that promise has one of two results, either that promise is **completed** (**resolve**) or it's **failed** (**rejected**).

```js
const promise = new Promise((resolve, reject) => {
    const sum = 1 + 1
    if (sum === 2) {
        resolve("Success")
    } else {
        reject("Error")
    }
})
```

- `.then` is like you call the resolve function, and message is the parameter you'll pass into the resolve function. 
- `.catch` is the reject function or anything you got an error in your promise, either it is the reject function or any error occurs insidee your promise. It not only catchh the rejection, but also catch any type of error.
- If the promise succeed => .then, if not => .catch, else => .catch
- If multiple promise at once, use: Promise.all, .any, .race, .allSettled.

```js
promise.then(message => {
    console.log(message)
}).catch(mmessage => {
    console.error(message)
})
```

- Promises were created to eliminate **callback hell**.

```js
// Callback Hell
setTimeout(() => {
    console.log("A")
    setTimeout(() => {
        console.log("B")
        setTimeout(() => {
            console.log("C")
        }, 100)
    }, 100)
}, 100)

// Promise Solution to Callback Hell
setTimeoutPromise(100)
    .then(() => {
        console.log("A")
    })
    .then(() => {
        console.log("B")
    })
    .then(() => {
        console.log("C")
    })

function setTimeoutPromise() {
    new Promise((resolve, reject) => 
        setTimeout(resolve, duration)
    })
}
```

- Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

**Benefits of Promises**
- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

```js
let my_promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

my_promise.then((message) => {
    console.log("This is in the then: " + message)
}).catch((message) => {
    console.log("This is in the catch: " + message)
})
```

- Promises are great when you need to do something that is going to take a long time in the background such as downloading an image from a different server. You want to do something else while waiting for it to be completed rather than put onhold everything else to wait for it. Also you can catch it if it fails so that you can make a retry or give the user an error message.

#### 12: Closures
- Every scope has access to variables outside of its scope. Inner functions inside another outer function can access to the outer function's variables and data.
- Basically closure is the ability of accessing data and variable outside of the scope of a function

```js
function print(e) {
    let e3 = 3
    return function func(e2) {
        console.log(e)
        console.log(e2)
        console.log(e3)
    }
}

let a = print(1);
a(2)
// => 1 2 3
```

#### 13: Explain forEach()
- It allows us to loop through an array without returning anything

```js
const a = [1, 2, 3, 4]

a.forEach((e, index) => {
    console.log(e, index)
})

// 1: 0
// 2: 1
// 3: 2
// 4: 3
```

#### 13: Explain map()
- Map loop through an array, manipulate each element in the array, and return a new array based on that, without affecting the old array.

```js
const a = [1, 2, 3, 4]

const newA = a.map(e => e * 2)
console.log(newA)   // [2, 4, 6, 8]
```

#### 14: Explain filter()
- It filters down an array to only selected values with a precondition, and return a new array.

```js
const a = [3, 4, 5, 6]

const newA = a.filter(e => e > 3)
console.log(newA)   // [4, 5, 6]
```

#### 15: .find, .some, .every, .reduce, .includes

- Reduce() takes an array and reduce into one singular value

```js
const a = [1, 2, 3]

const n = a.find(e => e > 2)
// n => 3

const isTrue = a.some(e +> e > 8)
// isTrue => false

const isFalse = a.every(e +> e > 0)
// isFalse => true

const reduced = a.reduce((sum, e) => {
    return sum + number
}, 0)
// reduced => 6

const items = [
    { price: 10 },
    { price: 30 },
    { price: 40 },
]

const total = items.reduce((total, item) => {
    return total + item.price
}, 0)

const isArrayContainThis = a.includes(2)
// isArrayCotainThis => true 
```

#### 16: New & This

```js
function createUser(name, age) => {
    return { name: name, age: age, human: true}
}

const user = createUser('Tin', 21)
console.log(user)

// New
function User(name, age) => {
    this.name = name
    this.age = age
    this.human = true
}

const user2 = new User("Sally", 25)

// Class
class Monster {
    constructor(name, type) {
        this.name = name,
        this.type = type,
        this.human = false
    }

    printName() {
        console.log(this.name)
    }
}
```

#### 17: Async & Await
- Async Await is to write promises in a different and cleaner way.
`await` is to tell JS to wait on that code and execute only after everything else is done.
- The purpose of this is to make your code look like synchronous but actuall it is asynchronous.
```js
function setTimeoutPromise(delay) }{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`You waited ${delay} miliseconds.`)
        }, delay)
    })
}

async function doStuff() {
    try {
        const message = await setTimeoutPromise(250)
        console.log(message)
        console.log("1")

        const message2= await setTimeoutPromise(250)
        console.log(message)
        console.log("2")
    } catch (error) {
        console.error(error)
    }
}
```

```js
function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

function getValueWithError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error")
        }, delay)
    })
}

async function getValue() {
    try {
        const value1 = await getValueWithDelay("Jake Smith", 300)
        console.log(value1)
        
        const value2 = await geteValueWithDelay("Billy Thompson", 300)
        console.log(value2)

        const value3 = await getValueWithError("None", 100)
        console.log(value3)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("finally")
    }
}
```

#### 18: fetch()
- This method let you fetch aka query information from the web into your project as JSON format, you do this via APIs, essentially APIs are really just websites that return to you data that you can use inside of your project.

```js
// Promsie version
fetch("https://jsonplaceholder.typicode.com/users").then(respone => respone.json()).then(data => {
    console.log(data)
    data.map(user => {
        console.log(user.name)
    })
})

// => 10 user objects

// Async Await version
const URL = "https://jsonplaceholer.typicode.com/users"
async functioon doStuff() {
    try {
        const response = await fetch(URL)
        if (response.ok) {
            await users = response.json
            console.log(users.map(user => console.log(user.name)))
        } else {
            console.log("Failure)
        }
    } catch (error) {
        console.log(error)
    }
} 

```

- Send data to the api with fetch:

```js
async functioon doStuff() {
    try {
        const response = await fetch(URL, {
            method: 'POST'  // GET for receive, POST for send | DELETE, PUT
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify{
                title: "New post"
            } 
        })

        const post = await response.json()
        console.log(post)
    } catch (error) {
        console.log(error)
    }
} 
```

#### 19: Explain Browser Storage?
- There're 3 types of storages in every modern day browser
```js
// Local Storage | Cookies              | Session Storage
// 10MB          | 4KB                  | 5MB
// Never Expire  | Manual Expiration    | Expire on Tab Close
// Client        | Client/Server        | Client
// Easy          | Hard                 | Easy

localStorage.setItem('Name', 'Tin')
localStorage.setItem('Name', 'Jay')
```

#### 20: How to Hit Data in the API?

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        userEmail.innerHTML = data.email
    })
```

- First, we need to fetch it, then we convert it into json, and then we'll get the data and decide what to do with it.
