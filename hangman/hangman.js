const Hangman = function (word, remainingGuesses, guessedLetters = []){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
    this.status - 'Playing'
    this.message = ''
}

Hangman.prototype.playingStatus = function () {
    let count = 0
    this.word.forEach(letter => {
        this.guessedLetters.includes(letter) ? count+=1 : count
    })
    count === this.word.length ? this.status = 'Finished' : (this.remainingGuesses === 0 ? this.status = 'Failed' : this.status = 'Playing')
    console.log(this.status) 
    
}

Hangman.prototype.getStatusMessage = function(){
    const message = this.status === 'Finished' ? this.message = "Great work! You guessed the word!" : (this.status === 'Failed' ? this.message = `Nice try! The word was ${this.word.join('')}` : this.message = `Guesses Left: ${game1.remainingGuesses}`)
    console.log(message)
    return message
}