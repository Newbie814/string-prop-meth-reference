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

function palindrome(str) {
  const regex = /[^A-Za-z0-9]/g;
  const newString = str.replace(regex, '').toLowerCase();
  const newStrRev = newString.split('').reverse().join('');
  if (newString === newStrRev) {
    return true;
  } else {
    return false;
  }
}

let resultMod = palindrome('My age is 0, 0 si ega ym.');
console.log(resultMod);

// const currencyUnit = {
//   PENNY: 1,
//   NICKEL: 5,
//   DIME: 10,
//   QUARTER: 25,
//   ONE: 100,
//   FIVE: 500,
//   TEN: 1000,
//   TWENTY: 2000,
//   'ONE HUNDRED': 10000,
// };

// function checkCashRegister(price, cash, cid) {
//   let change = cash * 100 - price * 100;
//   let cidTotal = 0;
//   for (let currType of cid) {
//     cidTotal += currType[1] * 100;
//   }
//   if (cidTotal < change) {
//     return { status: 'INSUFFICIENT_FUNDS', change: [] };
//   } else if (cidTotal === change) {
//     return { status: 'CLOSED', change: cid };
//   } else {
//     let answer = [];
//     cid = cid.reverse();

//     let currencyUnit = {
//       'ONE HUNDRED': 10000,
//       TWENTY: 2000,
//       TEN: 1000,
//       FIVE: 500,
//       ONE: 100,
//       QUARTER: 25,
//       DIME: 10,
//       NICKEL: 5,
//       PENNY: 1,
//     };
//     for (let changeType of cid) {
//       let drawArr = [changeType[0], 0];
//       changeType[1] = changeType[1] * 100;
//       while (change >= currencyUnit[changeType[0]]) {
//         change -= currencyUnit[changeType[0]];
//         changeType[1] -= currencyUnit[changeType[0]];
//         drawArr[1] += currencyUnit[changeType[0]] / 100;
//       }
//       if (drawArr[1] > 0) {
//         answer.push(drawArr);
//       }
//     }
//     if (change > 0) {
//       return { status: 'INSUFFICIENT_FUNDS', change: [] };
//     }
//     return { status: 'OPEN', change: answer };
//   }
// }

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]);

// let currencyUnit = {
//   'ONE HUNDRED': 10000,
//   TWENTY: 2000,
//   TEN: 1000,
//   FIVE: 500,
//   ONE: 100,
//   QUARTER: 25,
//   DIME: 10,
//   NICKEL: 5,
//   PENNY: 1,
// };

const currencyUnit = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  'ONE HUNDRED': 10000,
};

function checkCashRegister(price, cash, cid) {
  let changeTotal = cash * 100 - price * 100;
  let changeTotalCheck = changeTotal;

  let change = [];
  let status = '';

  let cidSum = 0;
  let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();

  filteredCid.forEach((elem) => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeTotal >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeTotal -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeTotal > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeTotal == 0 && changeTotalCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { status: status, change: change };
}
