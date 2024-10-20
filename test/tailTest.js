const assertEqual = require("../assertEqual");
const tail = require("../tail");

// TEST
console.log(assertEqual(tail([1, 2, 3]), [2, 3])); // Should pass
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])); // Should pass
