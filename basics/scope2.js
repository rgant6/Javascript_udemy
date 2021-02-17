let name = "Ryan"

// Name resets outside of each scope

if (true){
    let name = "Mike"
    if (true) {
        
        console.log(name)
    }   
}
if (true) {
    console.log(name)
}