//const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;
const middle = require('../middle');


// TEST 
describe("#middle", () => {
  it("returns [] for a single-element array", () => {
    assert.deepEqual(middle([1]), []); // should pass
  });

  it("returns [] for a two-element array", () => {
    assert.deepEqual(middle([1, 2]), []); // should pass
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // should pass
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // should pass
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); // should pass
  });
});
