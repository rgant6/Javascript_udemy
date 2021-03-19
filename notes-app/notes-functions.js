// read existing notes from local storage
const getSavedNotes = function (){
    const notesJSON = localStorage.getItem("notes")

    if (notesJSON != null) {
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

// Removing note from list
const removeNote = function(noteId){
    const noteIndex = notes.findIndex(function (note) {
        return note.id === noteId
    })

    if (noteIndex > -1){
        notes.splice(noteIndex,1)
    
    }
    saveNotes(notes)
}

// generate the DOM structure for a note
const generateNoteDOM = function (note){

    // Set up the 'remove note' button
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Set up the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener("click",function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })
    
    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed Note'
    }
    textEl.setAttribute("href", `edit.html#${note.id}`)

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

const saveNotes = function (notes){

    return localStorage.setItem('notes', JSON.stringify(notes))

}