const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  
  }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
      return true;
  };

//assertArrayEqual function

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) {
    console.log(`\u{1F603} Assertion Passed:${arr1} === ${arr2}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${arr1} !== ${arr2}`);
  }
};

//middle
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }

  if (array.length % 2 !== 0) {
    middleArray.push(array[(array.length - 1) / 2]);
  } else {
    middleArray.push(array[array.length / 2 -1], array[array.length / 2]);
  }
  return middleArray;
};

//Tests
console.log(middle([1,2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));