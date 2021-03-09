const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habits to work on",
    body: "Eat healthy"
}, {
    title: "Home Improvments next",
    body: "Build Porch"
}]

const filters = {
    searchText:''
    
}

const renderNotes = function (notes, filter) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note){
        const noteE1 = document.createElement('p')
        noteE1.textContent = note.title
        noteE1.className = "note"

        document.querySelector('#notes').appendChild(noteE1)
    })
}

renderNotes(notes,filters)

// event handlers
document.querySelector("#create").addEventListener('click',function (e) {
    // changes the element for the actual target
    // e.target.textContent = "The button was clicked"
    let title = window.prompt("Please enter a note title")
    let body = window.prompt("Please enter a note body")
    notes.push({
        title: title,
        body: body})
    console.log(notes)
    const newNote = document.createElement('p')
    newNote.className = "note"
    newNote.textContent = title
    document.querySelector("#notes").appendChild(newNote)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = (e.target.value)
    renderNotes(notes,filters)
})

document.querySelector("#name-form").addEventListener('submit',function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
})

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