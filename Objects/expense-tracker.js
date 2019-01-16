// Challenge area
const myAccount = {
   name: 'Jake Woods',
   expenses: 0,
   income: 0
};

const addExpense = (acccount, amount) => {
   acccount.expenses = acccount.expenses + amount;
};

const addIncome = (account, amount) => {
   account.income = account.income + amount;
};

const resetAccount = (account) => {
   account.expenses = 0;
   account.income = 0;
};

const getAccountSummary = (account) => {
   const balance = account.income - account.expenses;

   return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`;
}

addIncome(myAccount, 1000);
addExpense(myAccount, 200);
console.log(getAccountSummary(myAccount));