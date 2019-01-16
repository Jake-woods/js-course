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

// const findNote = (notes, noteTitle) => {
//    const index = notes.findIndex((note) => {
//       return note.title.toUpperCase() === noteTitle.toUpperCase();
//    });
//    return notes[index];
// }

const findNote = (notes, noteTitle) => {
   return notes.find((note) => {
      return note.title.toUpperCase() === noteTitle.toUpperCase();
   });

}

const note = findNote(notes, 'Blah blah bloo');
console.log(note)