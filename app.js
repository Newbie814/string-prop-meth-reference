// let text = 'Matthew Woodard';

// console.log(text.length); // 15  counts white space as well

// console.log(text.toLowerCase()); // matthew woodard
// console.log(text.toUpperCase()); // MATTEW WOODARD

// console.log(text.charAt(3)); // t
// console.log(text.charAt(text.length - 1)); // d  to get last character of a string
// console.log(text.indexOf('w')); //6 returns index of first instance
// console.log(text);
// console.log(text.trim()); // no change, as it only removes leading and trailing white space
// console.log(text.startsWith('M')); // true
// console.log(text.startsWith('m')); // false - case sensitive
// console.log(text.includes('da')); // true
// console.log(text.slice(0, 3)); // Mat
// console.log(text.slice(-2)); // rd

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

const obj1 = {
  name: 'Matthew',
  age: 44,
  hair: 'blonde',
  kids: ['Liam', 'Connor'],
};

let dotKeys = Object.keys(obj1)[0];
let dotValues = Object.values(obj1)[0];

console.log(dotKeys); // name
console.log(dotValues); // Matthew

// function whatIsInAName(collection, source) {
//   return collection.filter((obj) => {
//     return Object.keys(source).every((key) => {
//       return obj[key] === source[key];
//     });
//   });
// }

function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    for (let key of Object.keys(source)) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}

let result = whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
console.log(result);

let result2 = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

console.log(result2);

//    if (
//   !item.hasOwnProperty(Object.keys(source)[0]) ||
//   !item.hasOwnProperty(Object.values(source)[0])
// ) {
//   return false;
// } else {
//   arr.push(item);
// }

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   const souceKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter((obj) =>
//     souceKeys
//       .map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
//       .reduce((a, b) => a && b)
//   );
// }

// // test here
// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' }
// );

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   const sourceKeys = Object.keys(source);

//   return collection
//     .filter(obj => sourceKeys
//                      .every(key => obj.hasOwnProperty(key) &&
//                             obj[key] === source[key]));
// }

// // test here
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }

//   function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   const souceKeys = Object.keys(source);

//   // filter the collection
//   return collection.filter(obj => {
//     for (let i = 0; i < souceKeys.length; i++) {
//       if (!obj.hasOwnProperty(souceKeys[i]) ||
//           obj[souceKeys[i]] !== source[souceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// // test here
// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// );

function convertToRoman(num) {
  const romIntLegend = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNum = '';

  for (let key in romIntLegend) {
    while (num >= romIntLegend[key]) {
      romanNum += key;
      num -= romIntLegend[key]; // to subtract the total we just added to num before the next loop
    }
  }

  return romanNum;
}

let converted = convertToRoman(189);
console.log(converted);
