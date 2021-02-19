// Funtion ~ function input, the actual code run, output

// defining the function
let greetUser = function () {
    console.log("Welcome User")
}

// Calling the function
greetUser()

let square = function (num) {
    return num*num
}

let value = square(3)
let othervalue = square(10)
console.log(value)
console.log(othervalue)


let convertFahrenheitToCelcius = function(temp){
    let celcius = (temp -32) * (5/9)
    return celcius
}

console.log(convertFahrenheitToCelcius(32))
console.log(convertFahrenheitToCelcius(68))