const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {}
  
  //loop
  for (const letter of sentence) {
    //no spaces!
if (letter !== " ") {
  if (results[letter]) {
    results[letter] += 1;
  } else {
    results[letter] = 1;
   }
 }
}

return results;

};

//Test
const result = countLetters("halloween is the best time of the year");
console.log(result);


//assertEqual function
assertEqual(result["h"], 3); // Pass
assertEqual(result["a"], 2); // Pass
assertEqual(result["e"], 7); // Pass
assertEqual(result["t"], 4); // Pass
assertEqual(result["o"], 2); // Pass
assertEqual(result["s"], 2); // Pass
assertEqual(result["y"], 1); // Pass
assertEqual(result["r"], 1); // Pass
assertEqual(result["l"], 2); // Pass
assertEqual(result["n"], 1); // Pass
assertEqual(result["w"], 1); // Pass
assertEqual(result["i"], 2); // Pass
assertEqual(result["b"], 1); // Pass
assertEqual(result["m"], 1); // Pass
assertEqual(result["f"], 1);// Pass