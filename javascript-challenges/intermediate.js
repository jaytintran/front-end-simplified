function filterOutFalsy(e1, e2) {
    return (!e1) ? e1 : e2
}

function arrLength(arr) {
    return arr.length
}

function arrSum(arr) {
    let total
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

function progressiveSum(determinator) {
    let result = 0
    for (let i = 1; i <= determinator; i++) {
        result += i
    }
    return result
}

function calcTIme(secs) {
    let timerMinutes = Math.floor(secs / 60)
    let timerSeconds = secs % 60

    if (timerMinutes.toString().length === 1) {
        let timerMinutes = '0' + timerMinutes
    }

    return `${minutes}:${seconds}`
}

function getMax(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return max
}

function reserveString(str) {
    let new_str = ""
    for (let i = str.length - 1; i >= 0; i--) {
        new_str += str[i]
    }

    // Or
    return str.split('').reverse().join('')
}

function convertToZeros(arr) {
    return arr.map(item => 0)
    // Or
    return new Array(arr.length).fill(0)
}

function removeApples(arr) {
    return arr.filter(item => item !== 'Apple')
}

function flterOutFalsy(arr) {
    return arr.filter(item => !!item === true)
}

function convertToBoolean(arr) {
    return arr.map(item => !!iteam)
}

