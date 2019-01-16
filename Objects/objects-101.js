const myBook = {
   title: '1984',
   author: 'George Orwell',
   pageCount: 484
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal farm';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area
const person = {
   name: 'Bob',
   age: 90,
   location: 'England'
};

const message = `${person.name} is ${person.age} and lives in ${person.location}.`;

console.log(message);