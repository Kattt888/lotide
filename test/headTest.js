const head = require("../head");
const assertEqual = require("../assertEqual");

//TEST
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
assertEqual(head([]), undefined); // should pass
