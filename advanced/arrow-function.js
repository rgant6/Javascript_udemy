const square = (num) => num*num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: "Ryan",
    age: 27
},{
    name: "Betty",
    age: 34
},{
    name: "klive",
    age: 55
}]

// const under30Long = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age<30)
console.log(under30)

const age55 = people.find((person) => person.age === 55)
console.log(age55.name)