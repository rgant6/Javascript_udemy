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

let game1

const puzzleEl = document.querySelector('#hangman')
const guessesEl = document.querySelector('#guesses')
const wrongEl = document.querySelector('#wrong')

const render = () => {

     
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage
    wrongEl.textContent = `Guessed Letters: ${game1.wrongGuesses}`

    game1.puzzle.split("").forEach(letter => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
        // 
    // .forEach(letter => {
    //     console.log(letter)      
    // })
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    // textEl1.textContent = game1.puzzle
    game1.playingStatus()
    // textEl2.textContent = game1.statusMessage
    render()
})

const startGame = async()=>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', () => {
    startGame()})

startGame()
// Asynchronous execution
// getPuzzle("2").then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(`Error: ${err}`) 
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })