const assertEqual = require("../assertEqual");
const head = require("../head");

//TEST
console.log(assertEqual(head([5, 6, 7]), 5)); // Should pass
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); // Should pass