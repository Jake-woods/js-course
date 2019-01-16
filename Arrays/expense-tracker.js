// Challenge area
const account = {
   name: 'Jake',
   expenses: [],
   incomes: [],
   addExpense: function (description, amount) {
      this.expenses.push({
         description: description,
         amount: amount
      });
   },
   addIncome: function (description, amount) {
      this.incomes.push({
         description: description,
         amount: amount
      });
   },
   getAccountSummary: function () {
      let expensesTotal = 0;
      let incomesTotal = 0;
      let balanceTotal = 0;

      this.expenses.forEach((i) => {
         expensesTotal += i.amount;
      });

      this.incomes.forEach((i) => {
         incomesTotal += i.amount;
      });

      balanceTotal = incomesTotal - expensesTotal;

      return `${this.name} has a balance of $${balanceTotal}. $${incomesTotal} in income. $${expensesTotal} in expenses.`;

   }
};

account.addExpense("Bought a coke", 200);
account.addExpense("Rent", 800);
account.addIncome("Work", 2000);
console.log(account.getAccountSummary());