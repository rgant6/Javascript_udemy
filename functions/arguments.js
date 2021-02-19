let add = function (a,b,c) {
    return a+b+c
}

let result = add(10,1,5)
console.log(result)

let getScoreText = function (name = "Anonymous",score=0) {
  return "Name: "+name+ " | Score: "+score
}

let scoreText = getScoreText(undefined,99)
console.log(scoreText)

let getTip = function (money,percent=20){
    let tip = money * (percent/100)
    return tip
}

console.log("$"+getTip(40,15))
console.log("$"+getTip(100,10))

