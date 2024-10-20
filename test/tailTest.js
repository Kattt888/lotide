const tail = require("../tail");
const assertEqual = require("../assertEqual");


// TEST
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); 

const result = tail(["Hello", "Lighthouse", "Labs"]); 
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const emptyArray = [];
assertEqual(tail(emptyArray).length, 0); 
