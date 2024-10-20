const tail = require("../tail");
const assertEqual = require("../assertEqual");


// TEST
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); 

const result = tail(["Hello", "Lighthouse", "Labs"]); 
assertEqual(result, ["Lighthouse", "Labs"]);

const emptyArray = [];
assertEqual(tail(emptyArray), []); 
