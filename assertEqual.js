const assertEqual = function(actual, expected) {
  if (actual === expected) {
    
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
    
  }
};

module.exports = assertEqual;