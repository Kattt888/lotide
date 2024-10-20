const assertArraysEqual = require('../assertArraysEqual');

// TEST
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should fail
assertArraysEqual([], []); // Should pass