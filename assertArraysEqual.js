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

// Outputs
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), // => should FAIL
assertEqual(eqArrays(["1", "2" , "3"], ["1", "2", 3]), false); // => should FAIL
assertEqual(eqArrays([], []); // => should PASS