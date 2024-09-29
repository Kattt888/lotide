const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
  }
};

// Outputs
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(52, 23);
assertEqual("Icecream", "Icecream");