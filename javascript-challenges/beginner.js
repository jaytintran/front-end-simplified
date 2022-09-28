function sum(a, b) {
    return a + b;
}

function hourToSeconds(hour) {
    let minutes = hour * 60
    let seconds = minutes * 60
    return seconds
}

function calcRectanglePerimeter(length, width) {
    let perimeter = (length + width) * 2
    return perimeter
}

function calcTringleArea(base, height) {
    return 0.5 * base * height
}

function strExtend(str) {
    return str + "Frontend"
}

function sumhGreaterThan100(num1, num2) {
    return num1 + num2 >= 100
}

function lessOrEqualZero(num) {
    return num <= 0
}

function oppositeBoolean(bool) {
    return !bool
}

function isNotZero(num) {
    return num !== 0
}

function calcRemainder(num1, num2) {
    return num1 % num2
}

function isOdd(num) {
    return num % 2 == 0
}

function booleanInteger(num) {
    return num % 2 == 0 ? 1 : -1
}

function isLoggedInAndSubscribed(loggin_status, subscribed_status) {
    if (loggin_status === "LOGGED_IN" || subscribed_status === "SUBSCRIBED") {
        return true
    }
    return false
}