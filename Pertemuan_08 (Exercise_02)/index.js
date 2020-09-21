

const account = { //object
    //properties
    name: 'user',
    expenses: [],
    //function Declaration with argument
    addExpense(description, amount) {
        account.expenses.push({
            description: description, //properties of expenses
            amount: amount
        });
    },
    //function declaration
    getAccountSummary() {
        return account.expenses.reduce((result, expense) => result + expense.amount, 0) //forEach
    }
}
//output calls
account.addExpense('Milk', 5000);
account.addExpense('Sugar', 20000);
account.addExpense('Snack', 10000);
account.addExpense('Coffee', 4000);
console.log(account.getAccountSummary()); //39000


 