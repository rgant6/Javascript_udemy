let notes = getSavedNotes()

const filters = {
    searchText:''
}

renderNotes(notes,filters)

// event handlers
document.querySelector("#create").addEventListener('click',function (e) {
    // changes the element for the actual target
    // e.target.textContent = "The button was clicked"
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = (e.target.value)
    renderNotes(notes,filters)
})

document.querySelector("#filter-by").addEventListener("change",function (e){
    console.log(e.target.value)
})

window.addEventListener("storage",function (e) {
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

const now = new Date()
console.log(now.toString())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)



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