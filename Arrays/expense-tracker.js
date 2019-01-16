const account = {
   name: 'Jake',
   expenses: [],
   addExpense: function (description, amount) {
      this.expenses.push({
         description: description,
         amount: amount
      });
   },
   getAccountSummary: function () {
      let total = 0;
      this.expenses.forEach((i) => {
         total = total + i.amount;
      });
      return `${this.name} has $${total} in expenses.`;
   }
};

// Expense -> Description, amount

account.addExpense("Bought a coke", 10);
account.addExpense("Rent", 100);

console.log(account.getAccountSummary());