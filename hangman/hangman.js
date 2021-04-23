class Hangman {
    constructor(word, remainingGuesses, guessedLetters = []){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = guessedLetters
        this.status - 'Playing'
        this.message = ''
    }
    playingStatus(){
        let count = 0
        this.word.forEach(letter => {
            this.guessedLetters.includes(letter) || letter === ' ' ? count += 1 : count
        })
        console.log(count)
        count === this.word.length ? this.status = 'Finished' : (this.remainingGuesses === 0 ? this.status = 'Failed' : this.status = 'Playing')
        console.log(this.status)
    }
    get statusMessage(){
        const message = this.status === 'Finished' ? this.message = "Great work! You guessed the word!" : (this.status === 'Failed' ? this.message = `Nice try! The word was ${this.word.join('')}` : this.message = `Guesses Left: ${game1.remainingGuesses}`)
        return message
    }
    get puzzle(){
        let puzzle = ''
        this.word.forEach((letter) => {
            puzzle += this.guessedLetters.includes(letter) ? letter : ((letter === ' ') ? ' ' : '*')
        })
        return puzzle
    }
    guess(letterGuess){
        const letter = letterGuess.toLowerCase()
        if (!this.guessedLetters.includes(letter)) {

            this.guessedLetters += letter
            !this.word.includes(letter) ? this.remainingGuesses -= 1 : this.remainingGuesses

        }
    }
}
