const tail = require("../tail");
const assertEqual = require("../assertEqual");


// TEST
assertEqual(tail([1, 2, 3]), [2, 3]); // should pass
assertEqual(tail([1]), []); // should pass
assertEqual(tail([]), []); // should pass

// Log the results for confirmation
console.log(tail([1, 2, 3])); // should log [2, 3]
console.log(tail([1]));        // should log []
console.log(tail([]));         // should log []