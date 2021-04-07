// Primitive Values: string, number, boolean, null, undefined


// Prototype chain for an object
// myObject --> Object.prototype --> null
// Array: myArray --> aAray.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myStr --> String.prototype --> Objet.prototype --> null

const product = 'Computer'
console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)