let gradeCalculator = function (studentScore,totalScore){
    let score = (studentScore/totalScore)*100
    let grade = ""
    
    if (score >= 90 ){
        grade = "A"
    }else if(score >= 80){
        grade = "B"
    }else if(score >= 70){
        grade = "C"
    }else if(score >= 60){
        grade = "D"
    }else {
        grade = "F"
    }
    return `You got a(n) ${grade} with a score of ${score}%.`
}
console.log(gradeCalculator(20,50))