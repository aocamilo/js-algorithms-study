/**
 * A set is a special type of collection - 'set of values' (with no keys), where each value is unique and may only occur once
 * It has special methods:
 * new Set(iterable) - creates the set, and if an iterable object is provided (usually an array), copies values from it into the new set
 * set.add(value) - Adds a new value to the set
 * set.delete(value) - removes the value, returns true or false if the element existed at the moment the method was called
 * set.has(value) - checks if the set has an specific value - returns true or false
 * set.clear() - removes everything from the set
 * set.size  - returns the size of the set
 */

const set = new Set();

const camilo = { name: "Camilo" };
const manuela = { name: "Manuela" };
const alejandro = { name: "Alejandro" };
const macarena = { name: "Alejandro" };

//Does 5 additions but only takes unique values
set.add(camilo);
set.add(camilo);
set.add(manuela);
set.add(alejandro);
set.add(macarena);

console.log(set.size); // 4
console.log(set);
/*
note that the elements of the object don't have keys
Set(4) {
  { name: 'Camilo' },
  { name: 'Manuela' },
  { name: 'Alejandro' },
  { name: 'Alejandro' }
}
*/

//Removes the repeated values of an array
const numbers = [1, 1, 2, 5, 10, 1, 3, 3, 30, 2, 20, 14, 15];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers); // Set(9) { 1, 2, 5, 10, 3, 30, 20, 14, 15 }

//Return only unique values
function unique(arr) {
  return new Set(arr);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O
