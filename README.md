# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kattt888/lotide`

**Require it:**

`const _ = require('@kattt888/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

- `head(array)`: Retrieves the first element from the given array.
- `tail(array)`: Creates a new array excluding the first element of the original array.
- `middle(array)`: Identifies and returns the central element(s) of the array.
- `assertArraysEqual(array1, array2)`: Outputs a message stating whether two arrays are identical.
- `eqArrays(array1, array2)`: Evaluates and compares two arrays to determine if they are equal.
- `assertEqual(actual, expected)`: Outputs a message that indicates if the actual value matches the expected value.
- `countLetters(string)`: Counts the frequency of each letter present in the provided string.
- `countOnly(allItems, itemsToCount)`: Counts how many times a specified item appears within an array.
- `flatten(array)`: Merges a nested array into a single, flat array.
- `letterPositions(sentence)`: Determines and returns the index positions of each letter in the provided string.
- `map(array, callback)`: Creates a new array by applying a specified function to each element of the original array.
- `takeUntil(array, callback)`: Creates a new array that includes elements from the original array until the callback function returns a truthy value.
- `without(source, itemsToRemove)`: Generates a new array that excludes the specified items from the source array.