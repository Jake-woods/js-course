const notes = [{
      title: 'Note 1',
      body: 'I would like to eat'
   },
   {
      title: 'Habits to work',
      body: 'blah blah'
   },
   {
      title: 'Blah blah bloo',
      body: 'Something'
   }
];

// Looks for first match
const index = notes.findIndex(function (note, index) {
   return note.body === 'I would like to eat';
});

console.log(index);