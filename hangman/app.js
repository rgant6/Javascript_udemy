// Primitive Values: string, number, boolean, null, undefined

// Prototype chain for an object
// myObject --> Object.prototype --> null
// Array: myArray --> aAray.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Objet.prototype --> null
// Number: myNumber --> Number.prototype --> Objet.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Objet.prototype --> null

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        puzzle += this.guessedLetters.includes(letter) ? letter : ((letter === ' ') ? ' ' : '*')
    })
    return puzzle
}

Hangman.prototype.guess = function (letterGuess) {
    const letter = letterGuess.toLowerCase()
    if (!this.guessedLetters.includes(letter)) {

        this.guessedLetters += letter
        !this.word.includes(letter) ? this.remainingGuesses -= 1 : this.remainingGuesses 

    }
}

game1 = new Hangman("cat", 3)
game2 = new Hangman("bus", 6)

const gameEl = document.createElement('div')
gameEl.className = "hangman"
const textEl1 = document.createElement('a')
const textEl2 = document.createElement('a')
gameEl.appendChild(textEl1)
linebreak = document.createElement("br");
gameEl.appendChild(linebreak)
gameEl.appendChild(textEl2)
textEl1.textContent = game1.getPuzzle()
textEl2.textContent = `Remaining guesses: ${game1.remainingGuesses}`
document.querySelector('#hangman').appendChild(gameEl)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    textEl1.textContent = game1.getPuzzle()
    textEl2.textContent = `Remaining guesses: ${game1.remainingGuesses}`
    game1.playingStatus()
})