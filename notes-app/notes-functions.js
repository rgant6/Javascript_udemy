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
    const noteE1 = document.createElement('p')

    if (note.title.length > 0) {
        noteE1.textContent = note.title
    } else {
        noteE1.textContent = 'Unnamed Note'
    }

    noteE1.className = "note"
    return noteE1
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