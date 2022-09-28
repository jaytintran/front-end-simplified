const showRating = (number) => {
    let result = ""
    for (let i = 1; i <= Math.floor(number); i++) {
        result += "*"
        if (i !== Math.floor(number)) {
            result += " "
        }
    }
    if (!Number.isInteger(number)) {
        result += "."
    }  
    return result
}

const showRating2 = (number) => {
    let answer = ""
    for (let i = 1; i <= Math.floor(number); i++) {
        answer += "*"
        if (i !== Math.floor(number)) {
            answer += " "
        }
    }
    if (!Number.isInteger(number)) {
        answer += "."
    }
    return answer
}

const sortLowToHigh = (numbers) => {
    return numbers.sort((a, b) => a - b)
} 

const sortHighToLow = (numbers) => {
    return numbers.sort((a, b) => b - a)
} 