let text = 'Matthew Woodard';

console.log(text.length); // 15  counts white space as well

console.log(text.toLowerCase()); // matthew woodard
console.log(text.toUpperCase()); // MATTEW WOODARD

console.log(text.charAt(3)); // t
console.log(text.charAt(text.length - 1)); // d  to get last character of a string
console.log(text.indexOf('w')); //6 returns index of first instance
console.log(text);
console.log(text.trim()); // no change, as it only removes leading and trailing white space
console.log(text.startsWith('M')); // true
console.log(text.startsWith('m')); // false - case sensitive
console.log(text.includes('da')); // true
console.log(text.slice(0, 3)); // Mat
console.log(text.slice(-2)); // rd

// const person = {
//   name: 'Matthew', //property
//   greeting() {
//     //method
//     console.log(`Hello ${this.name}`);
//   },
// };

// console.log(person);

// console.log(person.name); // Matthew

// person.greeting(); // Hello Matthew
