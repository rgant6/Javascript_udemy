// let name = "Ryan"

// Name resets outside of each scope

if (true){
    // let name = "Mike"
    if (true) {
        // name = "Jen"
        let name = "Jen"
        // Assigning a new value "name" here is creating a new global known as a leaked global
        // This is an issue since no let is seen here
        console.log(name) 
    } 
}
if (true) {
    console.log(name)
}