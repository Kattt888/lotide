// eqArraysTest.js

const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// TESTS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should fail

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should fail

assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // Should fail

assertEqual(eqArrays([], []), true); // Should pass
