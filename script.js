'use strict';

////////////////////////////////////
////////////////////////////////////
// BANKIST APP

////Data///////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2023-04-06T17:01:17.194Z',
    '2023-04-08T23:36:17.929Z',
    '2023-04-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2022-06-25T18:49:59.371Z',
    '2022-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

////Elements/////////////////////////
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

////////////////////////////////////////

////LECTURES////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////////////////////////////////////////

////////////////////////////////////////
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

/////The New 'at' method//////////////
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
/////////////////////////////////////

/////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// }

// console.log(`//`);
///////////////////////////////////////

/////Using foreach////////////////////
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }
// });

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
///////////////////////////////////////

//////////////////////////////////////
// //Maximum Value
// const movements = account1.movements;
// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);

// console.log(max);
//////////////////////////////////////

/////Some And Every///////////////////
//Some
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
//Every
//console.log(account4.movements.every(mov => mov > 0));
//////////////////////////////////////

////Flat And FlatMap/////////////////
//Flat//
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const deepArr = [[1, 2, [3, 4]], 5, 6, [7, [8, 9]]];
// console.log(deepArr.flat());
// console.log(deepArr.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalances = allMovements.reduce((acc, mov) => Number(acc + mov), 0);
// console.log(overallBalances);

//Using Chaining
// const overallBalances = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => Number(acc + mov), 0);
// console.log(overallBalances);

// //FlatMap
// const overallBalances2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => Number(acc + mov), 0);
// console.log(overallBalances2);
/////////////////////////////////////

//Sorting Arrays/////////////////////
//strings
// const owners = ['ahmed', 'mohamed', 'mahmoud', 'ibrahim'];
// owners.sort();
// console.log(owners);

//numbers
//return < 0, A,B (keep order)
//return > 0, B,A (switch order)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//Another Way for Ascending
// movements.sort((a, b) => a - b);
// console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

//Another Way for Descending
// movements.sort((a, b) => b - a);
// console.log(movements);

//BRIEF FOR ME
// IN ASCENDİNG SORTING => IF A > B RETURN +(0 IS NOT POSITIVE) AND SWITCH BUT IF A < B RETURN - AND KEEP THE ORDER
// IN DESCENDING SORTING => IF A > B RETURN - AND KEEP THE ORDER BUT IF A < B RETURN +(0 IS NOT POSITIVE) AND SWITCH
/////////////////////////////////////

////More ways of creatıng and fıllıng array/////
// console.log(new Array(1, 2, 3, 4, 5, 6));

// const x = new Array(7);
// console.log(x);

// x.fill(1);
// console.log(x);

//Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const a = Array.from({ length: 100 }, num => {
//   num = Math.random() * 100;
//   const last = Math.round(num);
//   return last;
// });
// console.log(a);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.concat('✔')
//   );
//   console.log(movementsUI);
// });

//Another way to creating an array by 'spreading'
// const movementUI2 = [...document.querySelectorAll('.movements__value')];
// console.log(movementUI2);
/////////////////////////////////////

///Some Practise/////////////////////
//.1 calculate sum of deposits
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((cur, mov) => cur + mov, 0);
// console.log(bankDepositSum);

//2. numbers of deposits >= 1000
// const bigDeps = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(bigDeps);

//another way
// const bigDeps = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, el) => (el >= 1000 ? ++count : count), 0);
// console.log(bigDeps);

//3. calculate sum of deposits and withdrawals in one object
// const obj = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       //cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
//       sum[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sum;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(obj);

//4. convert to title case
// const toTilteCase = title => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = [
//     'a',
//     'an',
//     'but',
//     'or',
//     'with',
//     'the',
//     'in',
//     'on',
//     'of',
//     'and',
//   ];
//   const newTitle = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(newTitle);
// };
// console.log(toTilteCase('and this is A title and subtitle'));
////////////////////////////////////

///Numbers Section/////////////////
// console.log(23);
// console.log(Number('23'));
// console.log(+'23'); //this + symbol converts it to a number
// console.log(Number.parseInt('93.5hesham')); //output = 93

// //if i want to take a number out of the string
// console.log(Number.parseFloat('2px')); //output = 2.5

// //Check if value is not a number
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20x')); //true
// console.log(Number.isNaN(23 / 0)); //false

// //Check if value is a number
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20x')); //false
// console.log(Number.isFinite(23 / 0)); //false

// //Check if value is integer number
// console.log(Number.isInteger(23)); //true
// console.log(Number.isInteger(23.0)); //true
// console.log(Number.isInteger(23.5)); //false
// console.log(Number.isInteger(23 / 0)); //false

// Math Operations
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(Math.max(5, 8, 7, 2, 44, 65));
// console.log(Math.max(5, 8, 7, 2, 44, '65'));
// console.log(Math.min(5, 8, 7, 2, 44, 65));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1); //output will be random between 1 and 6

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min - 1) + (min + 1)); //(min-1) and (min+1) because i want the result in between them not from min to max

// console.log(randomInt(5, 7));

// //Rounding Integers
// console.log(Math.trunc(23.3)); // 23
// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24
// console.log(Math.ceil(23.4)); // 24
// console.log(Math.floor(23.9)); // 23
// console.log(Math.floor('23.3')); // 23
// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24

// //Rounding Decimals
// console.log((2.7).toFixed(0)); // 3 but string
// console.log((2.7).toFixed(3)); // 2.700 but string
// console.log((2.345).toFixed(2)); // 2.35 but string
// console.log(+(2.345).toFixed(2)); // 2.35 => here type is number

//REMAINDER
// const isEven = n => n % 2 === 0;
// console.log(isEven(10));
// console.log(isEven(25));

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = '#ddd';
//     else if (i % 3 === 0) row.style.backgroundColor = '#eee';
//   });
// });

//NUMERIC SEPARATORS
// const bigNum = 777666000000;
// console.log(bigNum); // 777666000000

// const bigNum2 = 777_666_000_000;
// console.log(bigNum2); // 777666000000

// console.log(230_000); // 230000
// console.log(Number('230_000')); // NAN

//BigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 4);
// console.log(1325346687845312148674867854413164864n);
// console.log(BigInt(1325346687845312148674867854413164864));
// console.log(20n == 20);
// console.log(10n / 3n); // 3n
// console.log(10 / 3); // 3.333

//DATES AND TIMES
// const date_now = new Date();
// console.log(date_now);

// console.log(new Date('15 mart'));
// const future = new Date(2023, 2, 17, 0, 0, 1);
// console.log(future);
// console.log(date_now.getFullYear());
// console.log(date_now.getMilliseconds());
// console.log(date_now.toISOString());
// console.log(date_now.getTime()); // the output here will be timestap
// console.log(new Date(1678976555431));
// console.log(Date.now()); // the output is timestamp
// future.setFullYear(2024); // changing the year in a date to any wanted year
// console.log(future);

//operations with dates

// const future = new Date(2024, 0, 1, 13, 0);
// console.log(+future);

// const now = new Date();
// console.log(+now);

// const calcPassedDays = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days = calcPassedDays(new Date(2023, 4, 30), new Date(2023, 4, 22));
// console.log(days);

//setTime()
// const ingredients = ['vg', 'cheese'];
// const pizzaTime = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// if (ingredients.includes('cheese')) clearTimeout(pizzaTime);

//setInterval()
// const logEverySecond = setInterval(() => {
//   const now = new Intl.DateTimeFormat('en-gb').format(new Date());

//   console.log(now);
// }, 1000);
///////////////////////////////////

////End Lectures/////////////////////

//////Start Bankist App//////////////////////////////////////////////////////////////
// Display Movements Function

const formatMovementDate = (date, locale) => {
  const calcPassedDays = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcPassedDays(new Date(), date);
  //console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed < 7) return `${daysPassed} Days ago`;
  if (daysPassed === 7) return '1 Weak ago';

  // const day = date.getDate().toString().padStart(2, 0);
  // const month = (date.getMonth() + 1).toString().padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

//Format Currency Function
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[index]);
    const mov_date = formatMovementDate(date, acc.locale);

    //calling format currency
    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">${mov_date}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;
    //containerMovements.innerHTML += html;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
////////////////////////////////

//Display Balance Function
const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  //Store balance to account
  acc.balance = balance;
  labelBalance.textContent = formatCur(balance, acc.locale, acc.currency);
};
///////////////////////////////

//Display Summary Function
const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);

  labelSumOut.textContent = formatCur(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, inc) => acc + inc, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
///////////////////////////////

//Create UseNames Function
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
///////////////////////////////

//updateUI Function
const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

//Set CountDown Timer///////////
const startLogoutTimer = () => {
  //set time to 5 minutes
  let time = 300;

  const startCount = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 seconds, stop timer and logout the user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //Decreaseing time
    time--;
  };

  //Call the timer every second
  startCount();
  timer = setInterval(startCount, 1000);
};

///////////////////////////////

let currentAccount, timer;

//Fake Always Logged ın
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Login////////////////////////
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (+inputLoginPin.value === currentAccount?.pin) {
    console.log('logged In');
    //Display UI and welcome message
    labelWelcome.textContent = `Hello ${currentAccount.owner.split(' ')[0]}`;

    //Show Homepage
    containerApp.style.opacity = 100;

    //Adding Dates////////////////
    // const now = new Date();
    // const day = now.getDate().toString().padStart(2, 0);
    // const month = (now.getMonth() + 1).toString().padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = now.getHours().toString().padStart(2, 0);
    // const min = now.getMinutes().toString().padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;

    const now = new Date();
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    //labelDate.textContent = new Intl.DateTimeFormat('en-gb', options).format(now);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    /////////////////////////////

    //Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //check if any timer running
    if (timer) clearInterval(timer);

    //Call timer function
    startLogoutTimer();

    updateUI(currentAccount);
  }
});
///////////////////////////

//Transfer Operation//////
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    receiverAcc &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc.userName !== currentAccount.userName
  ) {
    console.log('transfer valid');

    //Doing The Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    inputTransferAmount.value = inputTransferTo.value = '';
    updateUI(currentAccount);
    console.log(account1);
    console.log(account2);

    //Resetting the timer
    clearInterval(timer);
    startLogoutTimer();
  }
});
//////////////////////////////

////Requesting Loan//////////
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  const checkDeps = currentAccount.movements.some(
    mov => mov >= loanAmount * 0.1
  );

  // Add Movement
  if (checkDeps && loanAmount > 0) {
    setTimeout(() => {
      //Add movement
      currentAccount.movements.push(loanAmount);

      //Add movement date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2000);
  }

  inputLoanAmount.value = '';

  //Resetting the timer
  clearInterval(timer);
  startLogoutTimer();
});
/////////////////////////////

/////Closing Account//////////
btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );

    //Delete Accounts
    accounts.splice(index, 1);

    //clear Input Fields
    inputCloseUsername.value = inputClosePin.value = '';

    //Hide UI
    containerApp.style.opacity = 0;
  }
});

//clicking on sort button//////
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  sorted
    ? (btnSort.innerHTML = 'UNSORT')
    : (btnSort.innerHTML = '&downarrow; SORT');
});
//////////////////////////////
//////End Bankist App//////////////////////////////////////////////////////////////////////

//
//
//

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

///////////////////////////////////////////////////////////////////////////////////////
//Solution
// const checkDogs = function (dogsJulia, dogsKate) {
//   //step1
//   const juliaDogsCorrected = dogsJulia.slice(1, 3);
//   // juliaDogsCorrected.splice(0, 1);
//   // juliaDogsCorrected.splice(-2);
//   //step2
//   const allDogs = juliaDogsCorrected.concat(dogsKate);
//   console.log(allDogs);
//   //step3
//   allDogs.forEach((dog, num) => {
//     if (dog >= 3) {
//       console.log(
//         `Dog Number ${num + 1} is an adult and it is ${dog} years old`
//       );
//     } else {
//       console.log(
//         `Dog Number ${num + 1} is a puppy and it is ${dog} years old`
//       );
//     }
//   });
// };

// const julias = [3, 5, 2, 12, 7];
// const kates = [4, 1, 15, 8, 3];
// checkDogs(julias, kates);
/////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //Lets suppose these movements in 'EURO' So we want to convert them to 'DOLLAR'
// const eurToUsd = 1.1;
// const convertedMov = movements.map(mov => mov * eurToUsd);
// console.log(convertedMov);

// // same result as above but by Loop
// const convertedOnes = [];
// for (const mov of movements) {
//   convertedOnes.push(mov * 1.1);
// }
// console.log(convertedOnes);

// console.log(movements);
// const operations = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'withdraw '} ${Math.abs(
//       mov
//     )}`
// );

// console.log(operations);

//   if (movement > 0) {
//     console.log(` Movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(` Movement ${i + 1} you withDraw ${Math.abs(movement)}`);
//   }

//const user = 'Hesham Naser Elsobky'; // output: hns
// const createUserNames = function (accs) {
//   accs.forEach(acc => {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUserNames(accounts);
// console.log(accounts);
//
//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log('///////////////////////////');
// // Another Way for filtering
// const newArray = [];
// for (const move of movements) {
//   if (move > 0) newArray.push(move);
// }

// console.log(newArray);
/////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration: ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2); //output = 3840

// const balance = movements.reduce((acc, cur) => acc + cur, 10);
// console.log(balance); //output = 3850
///////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
//Challenge 2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//Solution
// const calcAverageHumanAge = ages => {
//   //step1
//   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   //step2
//   const filtered = humanAge.filter(dog => dog >= 18);
//   //step3
//   const avg = filtered.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   return avg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//Solution
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(dog => dog >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
//Find Method
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Sarah Smith');
// console.log(account);
/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀

*/

//Solution

// //1.
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => {
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// console.log(dogs);

// //2.
// const dogOfSara = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogOfSara);
// console.log(
//   `Sarah's Do Is Eating Too ${
//     dogOfSara.curFood > dogOfSara.recommendedFood ? 'Much' : 'Little'
//   }`
// );

// //3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooLittle);

// //4.
// //"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// //['Matilda', 'Sarah', 'John']
// //['Alice', 'Bob', 'Michael']

// console.log(
//   `"${ownersEatTooMuch.join(
//     ' and '
//   )}'s dogs eat too much" and "${ownersEatTooLittle.join(
//     ' and '
//   )}'s dogs eat too little"`
// );

// //5.
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// //6.
// const eatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;

// console.log(dogs.some(eatingOkay));

// //7.
// const eatingOkayDogs = dogs.filter(eatingOkay);
// console.log(eatingOkayDogs);

// //8.
// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);
