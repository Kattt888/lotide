const assertEqual = function(actual, expected) {
const val = [actual, expected];
const firstVal = _.head(val);
}

// Outputs
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");