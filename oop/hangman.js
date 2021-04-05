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
    console.log(puzzle)
}

Hangman.prototype.guess = function (letter) {
    this.guessedLetters += letter
}

game1 = new Hangman("california",20)
game2 = new Hangman("bus",6)

game1.guess('a')
game2.guess('b')

game1.getPuzzle()
game2.getPuzzle()
