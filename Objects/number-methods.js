const num = 123.412;

console.log(num.toFixed(1));

// Round
Math.round(num);
// Round up
Math.ceil(num);
// Round down
Math.floor(num);

// Random integer (0 - 1)
const max = 20;
const min = 10;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// Challenge area
const makeGuess = (guess) => {
   // Random number between 1 - 5
   const randomNumber = Math.floor(Math.random() * 5) + 1;

   return randomNumber === guess;
}
console.log(makeGuess(1));