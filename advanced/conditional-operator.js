// const myAge = 17
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote' 
// // coniditional operators
// // if (userAge >= 18){
// //     message = 'You can vote.'
// // }else{
// //     message = 'You cannot vote.'
// // }
// console.log(message)

const myAge = 17

const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return "showing the error page"
}

const message = myAge >= 21 ? showPage(): showErrorPage()
console.log(message)

const team = ['Tyler','Porter',"me","you"]

console.log(team.length<3 ? `Team size: ${team.length}`:"You have too many team memebers")
