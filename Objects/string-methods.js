const name = 'Jake Woods';

// Length property
name.length;

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
const password = 'abcpassword123';
console.log(password.includes('password'));

// Challenge area
// isValidPassword - true if valid
// length > 8 - doesn't contain 'password'
const isValidPassword = (password) => {
   return (password.length > 8) && (!password.includes('password'));
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#123'));
console.log(isValidPassword('asdasdwpasswordqweqwe'));