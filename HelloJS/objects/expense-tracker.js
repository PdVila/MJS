let myAccount = {
    name: "Andrew",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount //Old value + new value
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let accountSummary = function(account) {
    console.log(`$${account.name} has ${account.income - account.expenses}, $${account.income} in income. $${account.expenses} in expenses.`);
}

let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}
    //addIncome , takes account income 
//resetAccount, reset expenses to 0,

// getAccountSummary , prints the current values
// Account for Andrew has $900, $1000 in income. $100 in expenses


//addIncome
addIncome(myAccount, 1000); //Start with 1000
//addExpense
addExpense(myAccount, 50) //Expense of 50
//addExpense
addExpense(myAccount, 100) //Expense of 100, total = 150
//getAccount summary
accountSummary(myAccount)
//resetAccount
resetAccount(myAccount);
//getAccountSummary
accountSummary(myAccount)

