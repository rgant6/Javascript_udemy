// Prototypal inheritance
// myPerson --> person.prototype --> Object.prototype --> null

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
    set fullName(fullName){
        this.firstName = fullName.split(" ")[0]
        this.lastName = fullName.split(" ")[1]
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName,lastName,age,position,likes) {
        super(firstName, lastName, age, likes)
        this.position = position
        // this.firstName = firstName
        // this.lastName = lastName
        // this.age = age
        // this.likes = likes
    }
    getBio(){
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft(){
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName,lastName,age,grade,likes){
    super(firstName, lastName, age, likes)
    this.grade = grade
    }
    getBio(){
        return this.grade >= 70 ? `${this.firstName} is passing the class` : `${this.firstName} is failing the class`
    }
    updateGrade(addition){
        this.grade += addition
    }
}

const me = new Employee('Ryan','Gant',27, 'Teacher',['Biking','Running'])
me.fullName = 'Clancy McClancy'

console.log(me.getBio())
console.log(me.getYearsLeft())

