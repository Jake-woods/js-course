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

// You have x todos left
// Add a p for each todo above

const createP = (text) => {
   const p = document.createElement('p');
   p.textContent = text;
   document.body.appendChild(p);
}

const todosLeft = todos.filter((todo) => {
   return !todo.completed;
})

createP(`You have ${todosLeft.length} todos left.`);

todos.forEach((todo) => {
   createP(todo.text);
})