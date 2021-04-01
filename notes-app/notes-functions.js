// read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")
    try{
        return notesJSON ? JSON.parse(notesJSON) : []
    }catch(e){
        return []
    }    
}

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Removing note from list
const removeNote = (noteId) => {
    const noteIndex = notes.findIndex((note) => note.id === noteId)

    if (noteIndex > -1){
        notes.splice(noteIndex,1)
    
    }
    saveNotes(notes)
}

// generate the DOM structure for a note
const generateNoteDOM = (note) => {

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

// sort your notes by one of three ways
const sortNotes = (notes,sortBy) => {
    if (sortBy === "byEdited"){
        return notes.sort((a,b) => {
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1
            }else{
                return 0
            }
        })
    }else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => {
            if (a.createdAt < b.createdAt){
                return -1
            }else if (a.createdAt > b.createdAt){
                return 1

            }else{
                return 0
            }
        })
    }else if (sortBy === "alphabetical"){
        return notes.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1                
            }else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            }else{
                return 0
            }
        })
    }
}

// render application notes
const renderNotes = (notes, filter) => {
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteE1 = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteE1)
    })
}

