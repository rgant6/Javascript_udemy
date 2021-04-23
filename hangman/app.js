// HTTP (hypertext transfer protocol)
// Request - what do we want to do
// Response - What was actually done

// Primitive Values: string, number, boolean, null, undefined

// Prototype chain for an object
// myObject --> Object.prototype --> null
// Array: myArray --> aAray.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Objet.prototype --> null
// Number: myNumber --> Number.prototype --> Objet.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Objet.prototype --> null

game1 = new Hangman("project parts", 5)

const textEl1 = document.querySelector('#hangman')
const textEl2 = document.querySelector('#guesses')
textEl1.textContent = game1.puzzle
textEl2.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    textEl1.textContent = game1.puzzle
    game1.playingStatus()
    textEl2.textContent = game1.statusMessage
})

// Asynchronous execution
getPuzzle("2").then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`) 
})

getCountry('PL').then((country) => {
    console.log(`Country Name: ${country.name}`)
},(err) => {
        console.log(`Error: ${err}`)
})

