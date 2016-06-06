// ## Positive Numbers
//
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function posNum(arr, arr2) {
  arr2 = arr.filter(function(n) {
    if (n > 0) {
      return n;
    }
  });
  return arr2;
}

posNum([1, -5, -6, 7 , 2, 3, 9, -4]);

// ## Square the Numbers

// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: `squareTheNumbers([1, 2, 3])` should give `[1, 4, 9]`.

function squareNum(arr, arr2) {
    arr2 = arr.map(function(n) {
    return n * n;
   });
   return arr2;
}

squareNum([5, 10, 15, 20]);

// ## Good Job!
//
// Given an array of people's names:
//
// var people = [
//   'Sandhya',
//   'Dave',
//   'Carolyn',
//   'DeeAnn',
//   'Allen',
//   'Anthony',
//   'Kyle',
//   'Shanda',
//   'Cody',
//   'Tim',
//   'Regan',
//   'Matt',
//   'Andrew'
// ];
//
// Print out 'Good Job, {{name}}!' for each person's name, one on a line. Hint: You can use "\n" as the newline character and array's `join()` method to put together an array of strings.

var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];

// function hello() {
//   var greet = [];
//   people.map(function(person) {
//     greet.push('Good Job! ' + person);
//     greet.join('\n');
//
//   });
//
//   console.log(greet);
// }
// hello();

var phrases = people.map(function(person) {
  return 'Good Job! ' + person;
});

var newLines = phrases.join('\n');
console.log(result);
// ## All A names
//
// Write a function that takes the array of the student names from the last problem and returns only an array of the students whose names start with an "A".

var people = [
  'Sandhya',
  'Dave',
  'Carolyn',
  'DeeAnn',
  'Allen',
  'Anthony',
  'Kyle',
  'Shanda',
  'Cody',
  'Tim',
  'Regan',
  'Matt',
  'Andrew'
];

var easyA = people.filter(function(person) {
  // if (person.charAt(0) === "A") {
    return person.charAt(0) === "A";
});
///////////////////
function startWithAnA(str) {
  if (str.charAt(0) === 'A') {
    return true;
  }
}
var aStudents = people.filter(startWithAnA);
});
// ## Sum the array
//
// Write a function that takes an array of numbers and returns the sum of the numbers.

function total(arr) {
  var sum = arr.reduce(function(sum, n) {
    return sum + n;
  }, 0);
  return sum;
}
total([5, 10, 15, 20]);

// ## Get the largest number
//
// Write a function that takes an array of numbers and returns the largest number in the array. You may assume all numbers are positive.

// function largest(arr) {
//   var max = arr.reduce(function(currentValue, n) {
//     // console.log(currentValue);
//     return currentValue > n;
//   }, 0);
// }
//
// largest([5, 10, 15, 20]);

var numbers = [5, 10, 15, 20];

var max = numbers.reduce(function(currentValue, n) {
  if (n > currentValue) {
    return n;
  } else {
    return currentValue;
  }
  return max;
}, numbers[0]);

// ## Costs
//
// Given an array of catalog items:
//

// 1. Write a function that takes the array and returns a new array containing the individual prices of each item. With the above array you should get [15.99, 8.99, 2.99, 3.99]
// 2. Write a function that task the array and returns only the items with a price over 10 dollars.
// 3. Write a function that takes the array and returns a new array containing the total cost of each item by multiplying the item price by the quantity. For example, the above array should yield: [31.98, 8.99, 2.99, 39.9]

var items = [
  { name: 'Basketball', price: 15.99, quantity: 2 },
  { name: 'Pump', price: 8.99, quantity: 1 },
  { name: 'Whistle', price: 2.99, quantity: 1 },
  { name: 'Cones', price: 3.99, quantity: 10 },
];

// number 1
function getPrice() {
  var priceOfItem = items.filter(function(e) {
      return e.price;
    });
  }

  getPrice();

  // number 2
function mostExpensive() {
  var priceOfItem = items.filter(function(e) {
      return e.price > 10;
    });
    console.log(priceOfItem);
  }

mostExpensive();

//number 3
function getTotal() {
  var total = items.map(function(each) {
    return each.price * each.quantity;
  });
  console.log(total);
}
getTotal();

    // ## Is all positive?
    //
    // Write a function which, given an array of numbers, returns true if all the numbers in the array are positive, and returns false otherwise. Implement this function in 2 different ways: first using .every() and then using .some()
  var numbers = [1, -5, -6, 7 , 2, 3, 9, -4];

  var allPositive = numbers.reduce(function(allPositive, number) {
    return allPositive && number >= 0;
  }, true);

  var allPositive = numbers.every(function(number) {
    return number >= 0;
  });

  var somePositive = number.some(function(number) {
      return number >= 0;
  });
