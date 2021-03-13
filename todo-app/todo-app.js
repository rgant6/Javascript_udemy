const todo = getSavedTodos()

const filters = {
    searchText: '',
    checked: false
}

document.querySelector("#filter_todo").addEventListener('input',function (e){
    filters.searchText = e.target.value
    renderedTodos(todo,filters)
})

renderedTodos(todo, filters)

document.querySelector("#todo-text").addEventListener('submit',function (e) {    
    e.preventDefault()
    todo.push({
        title: e.target.elements.todoTitle.value,
        completed: false
    })    
    
    localStorage.setItem('todos',JSON.stringify(todo))
    renderedTodos(todo,filters)  
    e.target.elements.todoTitle.value = '' 
    })    

document.querySelector("#hide-completed").addEventListener("change", function (e){
    filters.checked = e.target.checked
    renderedTodos(todo,filters)
})



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

// let count = 0
// todo.forEach(function (todo) {
//     console.log(todo.completed)
//     if (!todo.completed) {
//         count++
//     }
// })  


// let texter = ''
// let texter1 = ''

// if (count > 1) {
//     texter = "tasks"
//     texter1 = "are"
// } else {
//     texter = "task"
//     texter1 = "is"
// }

// const newParagraph = document.createElement('h2')
// newParagraph.textContent = `There ${texter1} ${count} ${texter} left to finish`
// document.querySelector('body').appendChild(newParagraph)

// todo.forEach(function (todos) {
//     const newPara = document.createElement('p')
//     if (!todos.completed){
//         newPara.textContent = todos.title
//         document.querySelector('#new_todos').appendChild(newPara)
//         newPara.className = "todo"
//     }
// })