let notes = []

const filters = {
    searchText:''
    
}

// check for existing saved data
const notesJSON = localStorage.getItem("notes")

if(notesJSON != null){
    notes = JSON.parse(notesJSON)
}

const renderNotes = function (notes, filter) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const noteE1 = document.createElement('p')
        
        if (note.title.length > 0) {
            noteE1.textContent = note.title
        } else (
            noteE1.textContent = 'Unnamed Note'
        )
        
        noteE1.className = "note"

        document.querySelector('#notes').appendChild(noteE1)
    })
}

renderNotes(notes,filters)

// event handlers
document.querySelector("#create").addEventListener('click',function (e) {
    // changes the element for the actual target
    // e.target.textContent = "The button was clicked"
    
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = (e.target.value)
    renderNotes(notes,filters)
})

document.querySelector("#filter-by").addEventListener("change",function (e){
    console.log(e.target.value)
})
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