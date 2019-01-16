const myAccount = {
   name: 'Jake Woods',
   expenses: 0,
   income: 0
};

const addExpense = (acccount, amount) => {
   acccount.expenses = acccount.expenses + amount;
}