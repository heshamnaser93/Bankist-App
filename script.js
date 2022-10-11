'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 3));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// // this method 'splice' mutate the original array
// console.log(arr.splice(1, 3));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// // this method 'reverse' mutate the original array
// console.log(arr2.reverse());

// //let allLetters = arr.concat(arr2);
// let allLetters = [...arr, ...arr2];
// console.log(allLetters);
// console.log(allLetters.join('/'));

// The New 'at' method
// const arr = [23, 24, 25];
// console.log(arr[0]);
// console.log(arr.at(2));

// //Getting last Array Element
// //first way
// console.log(arr[arr.length - 1]);

// //second way
// console.log(arr.slice(-1)[0]);

// //third way
// console.log(arr.at(-1));

// // 'at method' works also for strings
// const string = 'Hesham';
// console.log(string.at(0));
// console.log(string.at(-1));

//
//
//
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// }

// console.log(`//`);

// // Using foreach
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// });

//
//
//
//
// Using forEach with 'Map' and 'sets'
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// });

// const currencies = new Set(['USD', 'EUR', 'GBP', 'USD', 'USD', 'GBP']);
// console.log(currencies);
// currencies.forEach(function (value, _, set) {
//   console.log(` ${value} from ${set}`);
// });
////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
//Start Working ON The App

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (movement, index) {
//     const type = movement > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${
//       index + 1
//     } ${type}</div>
//       <div class="movements__value">${movement}</div>
//     </div>`;
//     //containerMovements.innerHTML += html;
//     containerMovements.insertAdjacentHTML('beforeend', html);
//   });
// };

// displayMovements(account1.movements);
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  //step1
  const juliaDogsCorrected = dogsJulia.slice(1, 3);
  // juliaDogsCorrected.splice(0, 1);
  // juliaDogsCorrected.splice(-2);
  //step2
  const allDogs = juliaDogsCorrected.concat(dogsKate);
  console.log(allDogs);
  //step3
  allDogs.forEach((dog, num) => {
    if (dog >= 3) {
      console.log(
        `Dog Number ${num + 1} is an adult and it is ${dog} years old`
      );
    } else {
      console.log(
        `Dog Number ${num + 1} is a puppy and it is ${dog} years old`
      );
    }
  });
};

const julias = [3, 5, 2, 12, 7];
const kates = [4, 1, 15, 8, 3];
checkDogs(julias, kates);
