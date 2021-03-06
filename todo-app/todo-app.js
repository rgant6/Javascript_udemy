const todo = [{
    title: "Make the bed",
    completed: true
}, {
    title: "Eat Breakfast",
    completed: false
}, {
    title: "Make Coffee",
    completed: true
}, {
    title: "Go shopping",
    completed: false
}, {
    title: "Eat Dinner",
    completed: false
}]

// const ps = document.querySelectorAll("p")

// ps.forEach(function(ps) {
//     console.log(ps.textContent.indexOf("the"))
//     if (ps.textContent.indexOf("the") > -1){
//         ps.remove()
//     }
// })

// Challenge: Iterate over the amount of todos left
// You have 2 todos left (in a paragraph)
// Add a p for each value above

// How he did it:
// const incompleteTodos = todos.filter(function (todo){
//     return !todo.completed
// })

// const summary = document.createElement('h2')
// summary.textContent = `You have ${incompleteTodos.length} todos left`
// document.querySelector('body').appendChild(summary)

let count = 0
todo.forEach(function (todo){
    console.log(todo.completed)
    if (!todo.completed){
        count ++
    } 
})

document.querySelector("#new_todo").addEventListener('input',function(e){
    console.log(e.target.value)
})

document.querySelector('#create_todo').addEventListener('click', function (e) {
    // changes the element for the actual target
    // e.target.textContent = "The button was clicked"
    console.log("I'm adding a new todo")
})

console.log(count)
let texter = ''
let texter1 = ''

if (count>1){
    texter = "tasks"
    texter1 = "are"
}else{
    texter = "task"
    texter1 = "is"
}

const newParagraph = document.createElement('h2')
newParagraph.textContent = `There ${texter1} ${count} ${texter} left to finish`
newParagraph.querySelector('body').appendChild(newParagraph)

todo.forEach(function (todos){
    const newPara = document.createElement('p')
    newPara.textContent = todos.title
    document.querySelector('body').appendChild(newPara)
});