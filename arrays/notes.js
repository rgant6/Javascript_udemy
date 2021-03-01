// array of objects
const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
},{
    title: "Habits to work on",
    body: "Eat healthy"
},{
    title: "Home Improvments next",
    body: "Build Porch"
}]

const findNote = function (notes, noteTitle) {
    // notes.push - this is gonna change the original array, not some clone
    return notes.find(function (note,index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
// trying to make an array filter function. If you search "trip" you'd get back one

const findNotes = function(notes,query){
    return notes.filter(function (note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes,"build"))


// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note,index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]    
// }

// The function "find" does exactly what we built above

// const note = findNote(notes,"habits to work on")
// console.log(note)

// MDN array is the documentation

// adds a new item to the end
// notes.push("Note 4")
// // removes the last item in the array
// console.log(notes.pop())

// // shift removes the first item of an array
// console.log(notes.shift())

// // adds element to beginning of the array
// notes.unshift("Note 1")

// remove items as splice(start at this index, remove this amount of items)
// it also allows you to move forward in the array if you do 0 for second arguement
// notes.splice(1,1)
// splice allows you to add and remove
// // notes.splice(1,1,"New Item")

// notes[2] = "This is the new note"

// // this is a for loop looping over the item in the array
// notes.forEach(function (x,index){
//     console.log(index)
//     console.log(x)
// })

// // counting-for loop with the variable and then condition after semi colon then the function after the next semi colon
// for (let count = 0; count<=2; count++){
//     console.log(`counting: ${count}...`)
// }

// for (let count = 2; count >= 0; count--) {
//     console.log(`counting: ${count}...`)
// }

// // note: count is scoped locally
// // coping the for each below
// for (let count = 0; count< notes.length; count ++){
//     console.log(notes[count])
// }

// for (let count = notes.length-1; count >= 0; count--) {
//     console.log(notes[count])
// }

// // search for location of object in array; negative 1 returns for non-existing objects
// console.log("position: ",notes.indexOf("Note 7"))

// console.log(notes.length)
// console.log(notes)
// console.log(notes.indexOf({}))

// // {} === {} will return false
// // But the below will show true
// let someObject = {}
// let otherObject = someObject
// console.log(otherObject === someObject)

// const index = notes.findIndex(function (note, index){
//     console.log(index)
//     return note.title ==="Habits to work on"
// })
// console.log(index)
