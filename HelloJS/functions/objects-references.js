let myAccount = {
    name: "Andrew",
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount //Old value + new value
    console.log(account);
}

addExpense(myAccount, 2.50); //Both valeus will be the same
console.log(myAccount); //Both valeus will be the same