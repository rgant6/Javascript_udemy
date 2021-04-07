// Prototypal inheritance

const Person = function (firstName,lastName,age, likes = []){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
    this.likes = likes
}

// prototype is an object
Person.prototype.getBio = function (){
    let bio = `${this.firstName} is ${this.age}.`
    
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    
    return bio
}

Person.prototype.setName = function(fullName) {
    this.firstName = fullName.split(" ")[0]
    this.lastName = fullName.split(" ")[1]
}

const me = new Person('Ryan','Gant',27, ['Biking','Running'])
me.getBio = function () {
    return "this is fake"
}
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Clancy','Turner',51)

console.log(person2.getBio())
