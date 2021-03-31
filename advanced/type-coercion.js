// Type coercion - a string, a number, a boolean (truthy and falsey)
// double equals is boolean but doesn't take type into account, you don't ever want that, rather do type checking

const value = false + 12

const type = typeof value
console.log(type)
console.log(value)