// Data Types

    // String
    console.log("Hello, world!" + " My name is Tin.")

    // String Access
    console.log("Hello"[4])         // => 'o'
    console.log("Hello".length)     // => 5

    const my_name = "Tin"
    console.log(my_name[my_name.length - 1])    // => 'n'

    // Number
    console.log(typeof 5)           // 'number'
    console.log(typeof "Tin")       // 'string'
    1 + 9                           // => 10
    3 - 2                           // => 1
    3 * 3                           // => 9
    10 / 2                          // => 5
    11 % 3                          // => 2
    100 / (5 * 4)                   // => 5

    // Boolean
    5 < 10          // True
    5 > 10          // False

// Variable

let fullName = "Tin Tran"
let strength = 9999
let speed = 9999
let intelligence = 9999
let endurance = 9999
let shooting = 9999

let celsius = 10
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)

    // Equality
    let right = '1' == 1     // True
    let wrong = '1' === 1    // False

// Condition
let subscribe = false
let loggedIn = true

if (subscribe === true) {
    console.log('Show the videos')
} else if (loggedIn === true) {
    console.log('Tell the user to upgrade')
} else {
    console.log('Tell user to log in or sign-up')
}

let pay = 40
let price = 40
let change = pay - price

if (pay > price) {
    console.log(`Giving back the change $${change}`)
} else if (pay === price) {
    console.log("Thanks and have a nice day")
} else {
    console.log(`Sorry not enough of money - you still owe ${change * -1} dollars`)
}

    // Logical Operators
    let isStoreOpen = true
    price = 40
    cash = 50

    if (cash >= price && isStoreOpen) {
        console.log("You have enough cash to buy the product")
    }

    // Ternary Operators
    let hot = true

    hot ? console.log("It's hot outside") : console.log("It's cold outside")

    subscribe = true
    loggedIn = true

    subscribe && loggedIn ? 'Show the video' : 'Hide the video'

    pay = 50
    price = 40
    isStoreOpen = true

    pay >= price && isStoreOpen ? "Give receipt" : "Do not give receipt"

// Loops
let count = 1

while (count <= 100) {
    console.log(count)
    count++
}
    // From 0 to 100
    for (let i = 0; i <= 100; i++) {
        console.log(i)
    }

    // FizzBuzz
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FE Simplified")
        }
        else if (i % 3 === 0) {
            console.log("FE")
        } 
        else if (i % 5 === 0) {
            console.log("Simplified")
        } 
        else {
            console.log(i)
        }
    }

    // Every Char
    let phrase = "FE Simplified"
    for (let i = 0; i < phrase.length; i++) {
        console.log(phrase[i])
    }

// Functions

    // Declaration
    function welcomeGreeting(name) {
        console.log("Welcome to FES, " + name)
    }

    // Expression
    let greeting = function(name) {
        console.log(`Welcome to FES ${name}`)
    }

    // Function Calling
    welcomeGreeting("David")
    welcomeGreeting("Jay")
    welcomeGreeting("Menzi")


    // Return
    function sumOf(a, b) {
        return a + b
    }

    let result = sumOf(5, 5)    // => 10

    // Celsius to Fahrenheit
    function celsiusToFahrenheit(degree) {
        return degree * 1.8 + 32
    }

    const converterCelsiusToFahrenheit = (degree) => {
        return degree * 1.8 + 32
    }

    celsiusToFahrenheit(30)     // => 86

// Array

    // Intialize
    let arr = [20, 30, 40, 50, 100]

    // Access an array
    arr[0]              // => 20
    arr[arr.length - 1]     // => 100

    // Array Method
    arr.push(200)
    console.log(arr)        // => [20, 30, 40, 50, 100, 200]

    // filter()
    let newArr = arr.filter(element => element < 50)
    console.log(newArr)     // => [20, 30, 40]

    // Filter Fail Grades
    let grades = ['A+', 'A', 'FAIL']
    let acceptedGrades = grades.filter(grade => grade !== 'FAIL')
    console.log(acceptedGrades)     // => ['A+', 'A']

    // Filter Fail Grades w/o filter()
    let acceptedGrades2 = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] !== 'FAIL') 
            acceptedGrades.push(grades[i])  
    }

    // map()
    let array = [1, 3, 4, 9, 16]
    let newArray = array.map(e => 'number')

    console.log(newArray)       // => ['number' x 5]

    // Dollars to Cent
    let dollars = [1, 5, 10, 3]
    let cents = dollars.map(dollar => dollar * 100)

    console.log(cents)          // => [100, 500, 1000, 300]

    // Dollars to Cent w/o map()
    let newCents = []
    for (let i = 0; i < dollars.length; i++) {
        newCents.push(dollars[i] * 100)
    }

// Objects

    // Declaration
    let newUser = {
        username: 'Tin',
        email: "jaytintran@gmail.com",
        password: 'yeahthatrocks',
        subscription: "VIP",
        discordId: 'tintran#0858',
        lessonsCompleted: [0, 1, 2, 3]
    }

    // Accessing
    console.log(newUser.firstName)  // => 'Tin'
    console.log(newUser.lessonsCompleted)  // => [0, 1, 2, 3]

    // Loads of Users
    let users = [
        {
            username: "Matrix",
            email: "matrixplay@gmail.com",
            password: 'yeahthatrocks',
            subscription: "VIP",
            discordId: 'tintran#0858',
            lessonsCompleted: [0, 1, 2, 3]
        }
    ]
    users.push(newUser)

    // Utilize Objects with Logic
    function login(email, password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].password === password) {
                    console.log("Logging in, the info is correct.")
                    return users[i]
                }
                else {
                    console.log("The email existed, but wrong password.")
                }
                return null
            }
            else {
                console.log("Email or password is incorrect.")
            }
        }
    }

    // Create a Register Function
    function registerNewUser(username, email, password) {
        let newUser = {
            email,
            password,
            subscription: "Free",
            discordId: "",
            lessonsCompleted: []
        }
        users.push(newUser)
    }

// THE DOM

    // Accesing an Element
    document.querySelector('#title')
    document.getElementById('title')

    // Set Value
    document.querySelector('#title').innerHTML = "Front-end Simplified"

    // Change CSS
    document.querySelector('#title').style.color = 'red'
    document.querySelector('#title').style.fontSize = '3rem'

    function changeTitletoRed() {
        document.querySelector('#title').style.color = 'red'
    }

    function toggleDarkMode() {
        document.querySelector('body').classList.toggle('dark-mode')
    }
