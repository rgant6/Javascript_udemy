'use strict'

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
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    
    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed Note'
    }    
    // Append the note to the div
    noteEl.appendChild(textEl)

    // Set up the link
    noteEl.setAttribute("href", `edit.html#${note.id}`)

    // set up status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    noteEl.appendChild(statusEl)
    noteEl.classList.add("list-item")
    textEl.classList.add("list-item__title")
    statusEl.classList.add("list-item__subtitle")
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
    const notesEl = document.querySelector("#notes")    
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''
    if (filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteE1 = generateNoteDOM(note)
            notesEl.appendChild(noteE1)
        })
    }else{
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "No notes to show"
        emptyMessage.classList.add("empty-message")
        notesEl.appendChild(emptyMessage)
    }    
}

const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}

