const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
}

//are they the same?
for (let i = 0; i < arr1.length; i++) {
  if (arr[i] !== arr2[i]) {
    return false;
  }
}

return true;

//assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
  }
};

// Outputs
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => should PASS
assertEqual(eqArrays(["1", "2" , "3"], ["1", "2", 3]), false); // => should
