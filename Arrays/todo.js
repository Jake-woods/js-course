// Challenge file
const todos = [{
      text: 'Todo 1',
      completed: false
   },
   {
      text: 'Todo 2',
      completed: false
   },
   {
      text: 'Todo 3',
      completed: true
   },
   {
      text: 'Todo 4',
      completed: false
   },
   {
      text: 'Todo 5',
      completed: true
   },
];
// Function to
// Find index using findIndex (returns the index of item if found)
// then using that value to remove the item
const removeTodo = (todos, todoText) => {
   const index = todos.findIndex((todo) => {
      return todo.text.toLowerCase() === todoText.toLowerCase();
   })

   // If found
   if (index > -1) {
      todos.splice(index, 1);
   }
}

removeTodo(todos, 'Todo 3');
console.log(todos);