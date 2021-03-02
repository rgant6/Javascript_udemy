const account = {
    name: "Ryan Gant",
    income: [],
    addIncome: function (inc, amount) {
        this.income.push({
            description: inc,
            amount: amount
        })
    },

    expenses : [],
    addExpense: function (exp, amount) {
        this.expenses.push({
            description: exp, 
            amount: amount
        })
    },

    
   
    getAccountSummary: function () {

        let totalIncome = 0
        let totalExpenses = 0

        this.expenses.forEach(function (expense){
            
            totalExpenses += (expense.amount)
        })

        this.income.forEach(function (income){
            totalIncome += (income.amount)
        })

        return `${this.name} has a balance of $${totalIncome-totalExpenses} 
        Income Total: $${totalIncome}
        Total Expense: $${totalExpenses}`
    }
    }
        

 
// 1. add income array to the account
// 2. Set up an addIncome method -> description, amount
// 3. tweak getAccountSummary for income minus expenses


// Expense - description,amount

// two functions:
// add expense - two args: description, amount to add onto the array
// getAccountSummary - total up all expenses and print "Ryan Gant has $1250 in expenses"

account.addExpense("Rent", 950)
account.addExpense("Coffee",2)
account.addIncome("Job", 10000)
console.log(account.getAccountSummary())