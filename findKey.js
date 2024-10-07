const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed:${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) { //defining function

  //loop thru keys of object
  for (let key of Object.keys(object)) {
    //callback for current key value
    if (callback(object[key])) {
      return key; //return key if truthy
    }

  }

  return undefined; // if no key found return undefined
};


findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"



//TEST

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }, (x) => x.stars === 2); 
  assertEqual(result1, "noma");// Should pass

const result2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }, (x) => x.stars === 5); 
  assertEqual(result2, undefined); // => "noma" // Should fail/undefined - there are no keys w/ 5 stars!
