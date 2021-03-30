const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11,22,33,44))

const car = {
    color: 'Red',
    // arrow functions don't have acces to this, so we want to stick to regular functions instead of arrow functions
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary())