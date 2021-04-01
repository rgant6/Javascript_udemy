'use strict'

let notes = getSavedNotes()

const filters = {
    searchText:'',
    sortBy: 'byEdited'
}

renderNotes(notes,filters)

// event handlers
document.querySelector("#create").addEventListener('click', (e) => {
    const timeStamp = moment().valueOf()
    
    // changes the element for the actual target

    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',(e) => {
    filters.searchText = (e.target.value)
    renderNotes(notes,filters)
})

document.querySelector("#filter-by").addEventListener("change", (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

window.addEventListener("storage",(e) => {
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})



// const now = moment()
// console.log(now.toString())
// now.subtract(1,'week').subtract(20,'days')

// now.minute(1)
// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString())

// get time gets the number after the UNIX epoch
// console.log(now.getTime())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// document.querySelector("#for-fun").addEventListener("change", function (e){
//     console.log(e.target.checked)
// })

// document.querySelector("#name-form").addEventListener('submit',function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
// })

// DOM - Document Object Model

// representation of the paragraph element
// const p = document.querySelector("p")
// removes element created
// p.remove()

// query all and remove
// const ps = document.querySelectorAll("p")
// iterating over all paragraph tags and deleting them
// ps.forEach(function (p){
    // replaces the text with the **** in each paragraph
    // p.textContent = "*******"
    // prints the text content of paragraph
    // console.log(p.textContent)
// })

// add a new element
// createelement('element')
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'Here is a new paragraph added by DOM'
// document.querySelector('body').appendChild(newParagraph)

// The code above doesn't see the paragraph just added so it doesn't censor it


// document.querySelector("#remove").addEventListener('click', function (){
// // #is for id and . is for classes   
//     document.querySelectorAll("p.note").forEach(function (note){
//         note.remove()

//     })
// })

// crud - create read update and delete - need to perform these operations
// localStorage is provided in same way document is
// create: localStorage.setItem('location','Chicago')
// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')
// localStorage.clear()