// Object
let myBook = {
    // properties
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}
// Pulling individual properties
console.log(`${myBook.title} by ${myBook.author}`)

// Changing property values
myBook.title = "Animal Farm"
console.log(`${myBook.title} by ${myBook.author}`)

let person = {
    firstName: "Ryan",
    age: 27,
    location: "Chicago"
}

console.log(`${person.firstName} is ${person.age} years old and lives in ${person.location}`)

person.age = 28

console.log(`${person.firstName} is ${person.age} years old and lives in ${person.location}`)
