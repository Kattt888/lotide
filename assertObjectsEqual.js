// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  //check keys
  const objectLength1 = Object.keys(object1)
  const objectLength2 = Object.keys(object2) 

//check for same number of keys
  if (objectLength1.length !== objectLength2.length) {
    return false; 
  }
//comparing key-value pairs
  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    //comparing with !eqArrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if(!eqArrays (value1, value2)) { 
        return false;
      }
    } else if (value1 !== value2) {
      return false; // if values arent equal, return!
    }
  }

    return true;

  };
    
     

    // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;

  //assertArrayEqual function

  if (eqObjects(object1, object2)) {
    console.log(`\u{1F603} Assertion Passed:${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${inspect(object1)} !== ${inspect(object2)}`);
    }
  };


//TEST

const obj1 = {a: "1", b: 2 }
const obj2 = {b: 2, a: "1" }

assertObjectsEqual(obj1, obj2); // should pass 
