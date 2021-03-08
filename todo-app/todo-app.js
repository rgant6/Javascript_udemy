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
// console.log(ps.textContent.indexOf("the"))
// if (ps.textContent.indexOf("the") > -1){
// ps.remove()
// }
// })

// Challenge: Iterate over the amount of todos left
// You have 2 todos left (in a paragraph)
// Add a p for each value above

// How he did it:
// const incompleteTodos = todos.filter(function (todo){
// return !todo.completed
// })

// const summary = document.createElement('h2')
// summary.textContent = `You have ${incompleteTodos.length} todos left`
// document.querySelector('body').appendChild(summary)

document


let count = 0
todo.forEach(function (todo) {
    console.log(todo.completed)
    if (!todo.completed) {
        count++
    }
})

document.querySelector('#create_todo').addEventListener('click', function (e) {
    // changes the element for the actual target
    // e.target.textContent = "The button was clicked"
    console.log("I'm adding a new todo")
})

console.log(count)
let texter = ''
let texter1 = ''

if (count > 1) {
    texter = "tasks"
    texter1 = "are"
} else {
    texter = "task"
    texter1 = "is"
}

const newParagraph = document.createElement('h2')
newParagraph.textContent = `There ${texter1} ${count} ${texter} left to finish`
newParagraph.querySelector('body').appendChild(newParagraph)

todo.forEach(function (todos) {
    const newPara = document.createElement('p')
    newPara.textContent = todos.title
    document.querySelector('#new_todos').appendChild(newPara)
    newPara.className = "todo"
})

document.querySelector("#filter_todo").addEventListener('click',function (e){
    console.log("Add a new todo...")
})

const renderedTodos = function (todos, filter) {
    const filteredItems = notes.filter(function (todo) {
        todo.title.toLowerCase.includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#new_todos').innerHTML = ''
    filteredItems.forEach(function (todo) {
        const p1 = document.createElement('p')
        p1.textContent = todo.title
        p1.className = "todo"

        document.querySelector("#new_todos").appendChild(p1)
    })
}