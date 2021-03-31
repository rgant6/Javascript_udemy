const products =["Celery"]
const product = products[0]

// Truthy - values that resolve to true in a boolean context
// Falsey - values that resolve to false in a boolean context
// Falsey values = false, 0, '', null, undefined 

if (product) {
    console.log("Product Found")
}else{
    console.log("Product Not Found")
}