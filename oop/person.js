// Prototypal inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName){
        this.firstName = fullName.split(" ")[0]
        this.lastName = fullName.split(" ")[1]
    }
}

const me = new Person('Ryan','Gant',27, ['Biking','Running'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Clancy','Turner',51)
console.log(person2.getBio())
