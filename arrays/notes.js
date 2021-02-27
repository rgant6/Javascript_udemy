const notes = ["Note 1","Note 2","Note 3"]
// MDN array is the documentation

// adds a new item to the end
// notes.push("Note 4")
// // removes the last item in the array
// console.log(notes.pop())

// // shift removes the first item of an array
// console.log(notes.shift())

// // adds element to beginning of the array
// notes.unshift("Note 1")

// remove items as splice(start at this index, remove this amount of items)
// it also allows you to move forward in the array if you do 0 for second arguement
// notes.splice(1,1)
// splice allows you to add and remove
// notes.splice(1,1,"New Item")

notes[2] = "This is the new note"

// this is a for loop looping over the item in the array
notes.forEach(function (x,index){
    console.log(index)
    console.log(x)
})

console.log(notes.length)
console.log(notes)

// counting-for loop with the variable and then condition after semi colon then the function after the next semi colon
for (let count = 0; count<=2; count++){
    console.log(`counting: ${count}...`)
}

for (let count = 2; count >= 0; count--) {
    console.log(`counting: ${count}...`)
}

// note: count is scoped locally
// coping the for each below
for (let count = 0; count< notes.length; count ++){
    console.log(notes[count])
}

for (let count = notes.length-1; count >= 0; count--) {
    console.log(notes[count])
}
