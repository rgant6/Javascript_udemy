const todo = [{
    title:"Make the bed",
    completed:true
},{
    title:"Eat Breakfast",
    completed: false
},{
    title:"Make Coffee",
    completed: true
},{
    title:"Go shopping",
    completed: false
},{
    title:"Eat Dinner",
    completed: true
}]

// 1. Convert array to array of objects
// 2. Two properties = completed property that will be completed or not completed
// 3. Create function to remove a todo by text value

const deleteTodo = function(todoList, todoTitle){
    const index = todoList.findIndex(function (todo,index){
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > 0 && todoList[index].completed){
        todoList.splice(index,1)
    } else {
        console.log("Either the task is not completed, or does not exist")
    }
}

deleteTodo(todo, "dont dinner")
console.log(todo)
// todo.splice(2,1)
// todo.push("Clean the garage")
// todo.shift()

// console.log(`You have ${todo.length} tasks to do today`)

// todo.forEach(function (items,index){
//     console.log(`${index+1}. ${items}`)
// })
// // recreating the above foreach
// for (let count = 0; count <= todo.length-1; count ++){
//     console.log(`${count + 1}. ${todo[count]}`)
