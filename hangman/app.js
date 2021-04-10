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
        if (!this.word.includes(letter)) {
            this.remainingGuesses -= 1
        }
    }
}

const refreshGame = function (game) {  

    const gameEl = document.createElement('div')
    gameEl.className = "hangman"

    const textEl1 = document.createElement('a')
    const textEl2 = document.createElement('a')
    textEl1.textContent = game.getPuzzle()
    textEl2.textContent = `Remaining guesses: ${game.remainingGuesses}`
    gameEl.appendChild(textEl1)
    linebreak = document.createElement("br");
    gameEl.appendChild(linebreak)
    gameEl.appendChild(textEl2)
    document.querySelector('#hangman').appendChild(gameEl)
}

game1 = new Hangman("california", 20)
refreshGame(game1)
game2 = new Hangman("bus", 6)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    refreshGame(game1)

})