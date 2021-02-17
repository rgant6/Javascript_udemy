let temp = 31

// if (temp>=60){
//     if (temp <=90)
// }
// not this stuff, bad code

if(temp>=60 && temp<=90){
    console.log("It's nice outside")
}else if(temp<0 || temp>100){
    console.log("Don't go outside")
}else {
    console.log("You're good to go")
}

//challenge

let isGuest1Vegan = false
let isGuest2Vegan = false

if (isGuest1Vegan && isGuest2Vegan){
    console.log("Only offer vegan dishes")
}else if (isGuest1Vegan || isGuest2Vegan){
    console.log("Offer some menu items of both")
}else{
    console.log("Offer anything")
}