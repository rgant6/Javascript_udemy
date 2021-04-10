const Hangman = function (word, remainingGuesses, guessedLetters = []){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}