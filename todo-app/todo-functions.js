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
        // establishing elements
        const p1 = document.createElement('span')
        const d1 = document.createElement('div')
        const b1 = document.createElement('button')
        const c1 = document.createElement('input')
        
        // setup checkbox type
        c1.setAttribute("type","checkbox")

        // setup todo text
        p1.textContent = todo.title
        b1.textContent = 'x'

        // appending the elements to the div
        d1.appendChild(c1)
        d1.appendChild(p1)
        d1.appendChild(b1)

        // appending everything to the html
        document.querySelector("#new_todos").appendChild(d1)
    })
}

const renderedTodos = function (todos, filter) {
    
    // debug code using
    // debugger
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