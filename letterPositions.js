const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  
    //no spaces
    if (letter !== " ") {
      if(results[letter]) {
        results[letter].push(i);
      } else {

      results[letter] = [i];
      }
    }
  }
  
  return results; 
};

//TEST
const results = letterPositions("lighthouse in the house");
console.log(results);


const eqArrays = function(array1, array2) {
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
  }
};


//TEST
assertArraysEqual(letterPositions("hello");
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2, 3]);
assertArraysEqual(result["o"], [4]);