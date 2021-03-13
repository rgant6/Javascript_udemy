
// get todos from local storage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem("todos")
    if (todoJSON != null) {
        return JSON.parse(todoJSON)
    }else{
        return []
}}

const generateSummaryDOM = function (countTodosLeft){
    const newParagraph = document.createElement('h2')
    newParagraph.textContent = `There ${countTodosLeft.length} todos left to finish`
    document.querySelector('#new_todos').appendChild(newParagraph)
}

// save todos to local storage
const saveTodos = function(incompleteTodos,filteredItems) {
    if (filters.checked) {
        incompleteTodos = filteredItems.filter(function (todos) {
            return !todos.completed
        })
    } else {
        incompleteTodos = filteredItems.filter(function (todos) {
            return todos
        })
    }
    return incompleteTodos
}

const appendTodo = function(incompleteTodos){
    incompleteTodos.forEach(function (todo) {
        const p1 = document.createElement('p')

        p1.textContent = todo.title

        p1.className = "todo"

        document.querySelector("#new_todos").appendChild(p1)
    })
}

const renderedTodos = function (todos, filter) {
    const filteredItems = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    incompleteTodos = saveTodos({},filteredItems)

    const countTodosLeft = filteredItems.filter(function (todos) {
        return !todos.completed
    })

    document.querySelector('#new_todos').innerHTML = ''

    generateSummaryDOM(countTodosLeft)

    appendTodo(incompleteTodos)
}
