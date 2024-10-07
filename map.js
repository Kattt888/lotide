const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test cases

const words = ["ground", "control", "to", "major", "tom"];
const result1 = map(words, word => word[0]); //using map to get the first index of 0's corresponding letter!
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']); // Should pass

const numbers = [1, 2, 3, 4, 5];
const result2 = map(numbers, num => num * num); //using map to multiple each num by itself
assertArraysEqual(result2, [1, 4, 9, 16, 25]); // Should pass

const result3 = map(words, word => word.length); //using map to count the length of each word
assertArraysEqual(result3, [6, 7, 2, 5, 3]); // Should pass