const tail = require("../tail");
const assertArraysEqual = require("../assertArraysEqual");


// TEST
assertArraysEqual(tail([1, 2, 3]), [2, 3]); // should pass
assertArraysEqual(tail([1]), []); // should pass
assertArraysEqual(tail([]), []); // should pass
