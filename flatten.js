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
  if (eqArrays(arr1, arr2)) {
    console.log(`\u{1F603} Assertion Passed:${arr1} === ${arr2}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${arr1} !== ${arr2}`);
  }
};

//flatten
const flatten = function(array) {
  let flattenArray = [];

  //loop
for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i])) {
    flattenArray = flattenArray.concat(array[i]);
  } else {
    flattenArray.push(array[i]);
  }
}
return flattenArray;

};


// Outputs
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
