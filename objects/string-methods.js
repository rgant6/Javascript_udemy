let name = "Ryan Gant"

// length property
console.log(name.length)

// Convert to upperCase
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

let password = 'abc123password'

// console.log(password.includes('password'))

let isValidPassword = function (password){
    return (!password.toUpperCase().includes('PASSWORD') && password.length > 8)
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('123adseredvd123'))
console.log(isValidPassword('asdfppassword123'))


// MDN web dos is documentation for methods