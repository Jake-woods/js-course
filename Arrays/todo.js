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
   // Use find index which returns the index if found
   // -1 otherwise
   const index = todos.findIndex((todo) => {
      return todo.text.toLowerCase() === todoText.toLowerCase();
   })

   // If found
   if (index > -1) {
      todos.splice(index, 1);
   }
}

// Get things to do
// Based of if they are completed or not
// checks all todos.completed value
// if not completed returns array with all those todos
const getThingsTodo = (todos) => {
   const remainingTodos = todos.filter((todo) => {
      return !todo.completed;
   })
   return remainingTodos;
}

// Sort todos by completed
const sortTodos = (todos) => {
   todos.sort((a, b) => {
      if (!a.completed && b.completed) {
         return -1;
      } else if (!b.completed && a.completed) {
         return 1;
      } else {
         return 0;
      }
   })
}
sortTodos(todos);
console.log(todos)