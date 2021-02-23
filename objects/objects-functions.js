let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

let tempConvert = function (temp){
    let celcius = (temp-32) * (5/9)
    return {
        farhrenheit: temp,
        celcius: (temp-32) * (5/9),
        kelvin: celcius + 273.15
    }
    
}
let tempOut = tempConvert(54)
console.log(tempOut)
console.log(tempOut.celcius)
console.log(tempOut.kelvin)
console.log(tempOut.farhrenheit)