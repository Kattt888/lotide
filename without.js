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

const without = function(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
};


//tests
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

//more tests
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);