let num = 103.941

console.log(num.toFixed(20))

// MDN number shows all the number methods

let round = Math.round(num)
console.log(Math.floor(num))
console.log(Math.log(num))
console.log(round)

// This is the random number formula
let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max-min +1))+min

console.log(randomNum)

// Challenge
let guesser = function (guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min +1))+min

    return guess === randomNum    
}

console.log(guesser(2))