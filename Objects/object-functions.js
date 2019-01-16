const myBook = {
   title: '1984',
   author: 'George Orwell',
   pageCount: 326
};

const otherBook = {
   title: 'A Peoples History',
   author: 'Howard Zinn',
   pageCount: 723
};

const getSummary = (book) => {
   const message = `${book.title} by ${book.author}`;
   console.log(message);
}

getSummary(myBook);
getSummary(otherBook);

// Challenge area
// Function - take fahrenheit in - return object with all three

const temps = (fah) => {
   return {
      fah: fah,
      celsius: (fah - 32) * (5 / 9),
      kelvin: (fah + 459.67) * (5 / 9)
   };
};

console.log(temps(74));