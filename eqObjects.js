const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F603} Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`\u{1F62E} Assertion Failed:${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    
    if (arr1[i] !== arr2[i]) {
      return false;
  
    }
  }
return true
}


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  //check
  const objectLength1 = Object.keys(object1)
  const objectLength2 = Object.keys(object2) 


  if ( objectLength1.length !== objectLength2.length) {
    return false; 

  }

  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      const arrays = eqArrays (value1, value2)
    
      if (arrays === false) {
        return false;
      }
    }


    else if (value1 !== value2)
    {
      return false;
    }


   }

  return true;


};



//TEST
//const anotherShirtObject = { size: "medium", colors: ["red", "blue"]};
//Object.keys(anotherShirtObject)

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true));

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false));


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)); // => false