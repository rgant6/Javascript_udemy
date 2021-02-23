let myAccount ={
    name: "Ryan Gant",
    expenses: 0,
    income: 0
}

let otherAccount = myAccount

// add income to the account

let addIncome = function (account, income){
    account.income += income 
}

let accountReset = function (account){
    myAccount.income = 0
    myAccount.expenses = 0
}

let getAccountSummary = function (account){
    let amount = myAccount.income - myAccount.expenses
    return (`Account for ${account.name} has $${amount} in income with $${account.expenses} in expenses`)
}

let addExpense = function (account,amt){
    account.expenses = account.expenses + amt
    otherAccount.income = 1000
}

addIncome(myAccount,1000)
addExpense(myAccount,10)
console.log(getAccountSummary(myAccount))
accountReset(myAccount)
console.log(getAccountSummary(myAccount))
// This updates the object to the new amount
// console.log(myAccount)
