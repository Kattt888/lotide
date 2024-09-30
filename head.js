const assertEqual = function(actual, expected) {
const val = [actual, expected];
const first = _.head(val);
console.log(first)


if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
} else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }


// Outputs
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");