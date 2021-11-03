// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:


// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"
*/

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}

// - Write a Function Expression
let addOne = function (n) {
  return n + 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n + 1;
};

// - Execute the function
addOne(21);

// - Execute the function and store the return value in a variable.
let addingNumbers = addOne(21);

// - What is the typeof returnValue
Number;

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(n) {
  return n - 1;
}

// - Write a Function Expression
let subtractOne = function (n) {
  return n - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets
let subtractOne = (n) => {
  return n - 1;
};

// - Execute the function
subtractOne(21);

// - Execute the function and store the return value in a variable.
let minusingNumbers = subtractOne(21);

// - What is the typeof returnValue
Number;
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB) {
  return numA - numB;
}

// - Write a Function Expression
let sum = function (numA, numB) {
  return numA - numB;
};

// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA - numB;

// - Write an Arrow Function with curly brackets
let sum = (numA, numB) => {
  return numA - numB;
};

// - Execute the function
sum(323, 33);
// - Execute the function and store the return value in a variable
let equalSum = sum(323, 33);

// - What is the typeof returnValue
Number;

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num) {
  return num * num;
}

// - Write a Function Expression
let square = function (num) {
  return num * num;
};

// - Write an Arrow Function without curly brackets(if possible)
let square = (num) => num * num;

// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num;
};

// - Execute the function
square(42);
// - Execute the function and store the return value in a variable
let equalSquare = square(42);

// - What is the typeof returnValue
Number;

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(numA, numB) {
  return numA > numB;
}

// - Write a Function Expression
let isGreater = function (numA, numB) {
  return numA > numB;
};

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (numA, numB) => numA > numB;

// - Write an Arrow Function with curly brackets
let isGreater = (numA, numB) => {
  return numA > numB;
};

// - Execute the function
isGreater(42, 40);
// - Execute the function and store the return value in a variable
let greaterThan = isGreater(42, 40);

// - What is the typeof returnValue
Number;

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(value) {
  if (value % 2 == 0) return true;
  else return false;
}

// - Write an anonymous Function Expression

// - Write an named Function Expression
let oddOrEven = function (value) {
  if (value % 2 == 0) return true;
  else return false;
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (value) => (value % 2 == 0 ? true : false);
// - Write an Arrow Function with curly brackets
let oddOrEven = (value) => {
  if (value % 2 == 0) return true;
  else return false;
};

// - Execute the function
oddOrEven(21);
// - Execute the function and store the return value in a variable
let isEven = oddOrEven(21);
// - What is the typeof returnValue
Number;
