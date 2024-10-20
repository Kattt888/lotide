///const tail = require("../tail");
//const assertEqual = require("../assertEqual");

const assert = require('chai').assert;
const tail = require('../tail');



// TEST
describe("#tail", () => {
  it("should not change the original array's length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3); 
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]); 
  });

  it("returns [] for an empty array", () => {
    const emptyArray = [];
    assert.deepEqual(tail(emptyArray), []); 
  });
});

