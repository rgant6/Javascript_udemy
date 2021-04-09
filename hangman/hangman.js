const Hangman = function (word, remainingGuesses, guessedLetters = []){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    this.word.forEach((letter) => {
        puzzle += this.guessedLetters.includes(letter) ? letter:((letter === ' ') ? ' ': '*')
    })
    return puzzle    
}

Hangman.prototype.guess = function (letterGuess) {
    const letter = letterGuess.toLowerCase()
    if(!this.guessedLetters.includes(letter)){
        
        this.guessedLetters += letter
        if (!this.word.includes(letter)){
            this.remainingGuesses -= 1
        }
    }
}

game1 = new Hangman("california",20)
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)
game2 = new Hangman("bus",6)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)

})
