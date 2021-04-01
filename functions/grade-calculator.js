const gradeCalculator = function (studentScore,totalScore){
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number'){
        throw Error("Please provide numbers only")
    }
    const score = (studentScore/totalScore)*100
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
}
try{
    console.log(gradeCalculator('hi',50))
}catch (e){
    console.log('Error here')
}