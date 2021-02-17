let isAccountLocked = false
let userRole = 'admin'


if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

let temp = 4

if (temp <= 32){
    console.log("It's freezing outside")
} else if (temp >=110){
    console.log("It's hot out")
} else {
    console.log("It's great out")
}