//const assertEqual = function(actual, expected) {
 // if (actual === expected) {
 //   console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
//  } else {
 //   console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
 // }
//};

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
