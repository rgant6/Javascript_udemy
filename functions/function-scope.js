// Globl scope {convertFtoC,tempOne,tempTwo}
    // Local Scope {far, cel}


let convertFahrenheitToCelcius = function(temp){
    let celcius = (temp -32) * (5/9)

    if (celcius <= 0) {
        let isFreezing = true
    }
    return celcius,isFreezing
}

console.log(convertFahrenheitToCelcius(68))
console.log(convertFahrenheitToCelcius(32))
