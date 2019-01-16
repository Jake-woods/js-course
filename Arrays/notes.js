const notes = ['Note 1', 'Note 2', 'Note 3'];

// Remove last
notes.pop();
// Add to end
notes.push('Note 4');
// Removes first item
notes.shift();
// Adds to start
notes.unshift('New first note');

// where, number of things removing, add item in that localation
notes.splice(1, 0, 'New item');


console.log(notes);