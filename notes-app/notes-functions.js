// read existing notes from local storage
const returnExistingNotes = function (){
    const notesJSON = localStorage.getItem("notes")

    if (notesJSON != null) {
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

// generate the DOM structure for a note
const generateNoteDOM = function (note){

    // Set up the 'remove note' button
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // Set up the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed Note'
    }

    // Append the note to the div
    noteEl.appendChild(textEl)

    noteEl.className = "note"
    return noteEl
}



// render application notes
const renderNotes = function (notes, filter) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteE1 = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteE1)
    })
}

const notesSaveLocally = function (notes){

    return localStorage.setItem('notes', JSON.stringify(notes))

}