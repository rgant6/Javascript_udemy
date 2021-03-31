const titleEl = document.querySelector("#note-title")
const bodyEl = document.querySelector("#note-body")
const removeEl = document.querySelector("#remove-note")
const noteId = location.hash.substring(1,)
const dateEl = document.querySelector("#last-edited")

let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note){
    location.assign("index.html")
}

const timeStamp = note.updatedAt

titleEl.value = note.title
bodyEl.value = note.body
dateEl.textContent = `Last edited: ${moment(note.updatedAt).fromNow()}`

titleEl.addEventListener("input", (e) => {
    
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = `Last edited: ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes)
})
bodyEl.addEventListener("input", (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = `Last edited: ${moment(note.updatedAt).fromNow()}`
    saveNotes(notes)
})

removeEl.addEventListener("click",(e)=>{
    removeNote(noteId)
    location.assign("index.html")
})

window.addEventListener("storage", (e)=> {
    dateEl.textContent = `Last edited: ${moment(note.updatedAt).fromNow()}`
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign("index.html")
        }
        
        titleEl.value = note.title
        bodyEl.value = note.body
    }
})