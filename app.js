// QUSETION NO# 1...
// function addNumber(num) {
//   return function (value) {
//     return value + num;
//   };
// }

// const addFive = addNumber(5);

// console.log(addFive(10));
// console.log(addFive(20));
// console.log(addFive(-5));

// QUSETION NO# 2...
function searchArray(array, value) {
  if (array.length === 0) {
    return false;
  }

  if (array[0] === value) {
    return true;
  } else {
    return searchArray(array.slice(1), value);
  }
}
console.log( searchArray([0,1,2],4));

// QUSETION NO# 3...