// DOM - Document Object Model

// representation of the paragraph element
// const p = document.querySelector("p")
// removes element created
// p.remove()

// query all and remove
const ps = document.querySelectorAll("p")
// iterating over all paragraph tags and deleting them
ps.forEach(function (p){
    // replaces the text with the **** in each paragraph
    p.textContent = "*******"
    // prints the text content of paragraph
    // console.log(p.textContent)
})