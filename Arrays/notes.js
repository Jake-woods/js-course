const notes = [{
      title: 'Note 1',
      body: 'I would like to eat'
   },
   {
      title: 'ZHabits to work',
      body: 'blah blah'
   },
   {
      title: 'Blah blah bloo',
      body: 'Something'
   }
];

const sortNotes = (notes) => {
   notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
         return -1;
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
         return 1;
      } else {
         return 0;
      }
   });
}

const findNote = (notes, noteTitle) => {
   return notes.find((note) => {
      return note.title.toUpperCase() === noteTitle.toUpperCase();
   });
}

// Filter
// test note title and body against input
// if found it's added to new array and
// new array returned
const findNotes = (notes, query) => {
   const filteredNotes = notes.filter((note) => {
      const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
      const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
      return isTitleMatch || isBodyMatch;
   });
   return filteredNotes;

}
sortNotes(notes);
console.log(notes);