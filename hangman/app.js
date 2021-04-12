// Primitive Values: string, number, boolean, null, undefined

// Prototype chain for an object
// myObject --> Object.prototype --> null
// Array: myArray --> aAray.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Objet.prototype --> null
// Number: myNumber --> Number.prototype --> Objet.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Objet.prototype --> null

game1 = new Hangman("cat", 3)
game2 = new Hangman("bus", 6)

const textEl1 = document.querySelector('#hangman')
const textEl2 = document.querySelector('#guesses')
textEl1.textContent = game1.getPuzzle()
textEl2.textContent = game1.getStatusMessage()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    textEl1.textContent = game1.getPuzzle()
    game1.playingStatus()
    textEl2.textContent = game1.getStatusMessage()
})