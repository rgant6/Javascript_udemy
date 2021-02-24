const todo = ["Make the bed","Eat Breakfast","Make Coffee","Go shopping","Eat Dinner"]

todo.splice(2,1)
todo.push("Clean the garage")
todo.shift()



console.log(`You have ${todo.length} tasks to do today`)

todo.forEach(function (items,index){
    console.log(`${index+1}. ${items}`)
})