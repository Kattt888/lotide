const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: actual === expected");
  } else {
    console.log("Assertion Failed: actual !== expected");
  }
};

// Outputs
assertEqual("\u{1F62E} Lighthouse Labs", "Bootcamp");
assertEqual("\u{1F603} 1",1);
assertEqual("\u{1F62E} 52", 23);
assertEqual("\u{1F603} Icecream", "Icecream");