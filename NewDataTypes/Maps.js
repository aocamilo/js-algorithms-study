/*
 * Maps are a collection of keyed elements, just like objects. But the main difference is that Maps allow keys of any type
 * It also has the following useful methods:
 * new Map() creates the map
 * map.set(key, value) stores the value of the key
 * map.get(key) returns the value by the key, undefined if the key doesn't exist inside the map
 * map.has(key) returns true if the key exists, false otherwise
 * map.delete(key) removes the value by the key
 * map.clear() removes everything from the map
 * map.size returns the current element count
 */

//Map vs Object
//Object converts the key type to string
const objectMap = {
  1: "string",
  2: "number",
  true: "boolean",
};

console.log(Object.keys(objectMap).forEach((key) => console.log(typeof key))); //string string string

//Map keeps the type of its keys
let map = new Map();
map.set("1", "string"); //String key
map.set(1, "number"); //Numeric key
map.set(true, "boolean"); //Boolean key

console.log(map.forEach((_, key) => console.log(typeof key))); // string number boolean

//You can also use the objects properties, like converting to arrays easy
const mapKeysInArray = [...map.keys()];
const mapValuesInArray = [...map.values()];
const arrayOfValues = Array.from(map);

console.log(mapKeysInArray);
console.log(mapValuesInArray);

//You can also use objects as keys
const camilo = { name: "camilo" };

const visitCount = new Map();

visitCount.set(camilo, 1); //Maps are mutable!!

console.log(visitCount); // Map(1) { { name: 'camilo' } => 1 }

//Every map.set call returns the map itself, so we can “chain” the calls:
const newMap = new Map();
newMap.set("1", "str1").set(1, "num1").set(true, "bool1");

console.log(newMap); // Map(3) { '1' => 'str1', 1 => 'num1', true => 'bool1' }
console.log(newMap.get(1)); // num1
console.log(newMap.has(true)); // true
console.log(delete "1"); // true
console.log(newMap.clear(), newMap); // undefined Map(0) {}

/*
Anagrams are words that have the same number of same letters, but in different order.

For instance:
nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
*/

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const anagramsMap = new Map();

  arr.forEach((word) => {
    const sorted = word.toLowerCase().split("").sort().join("");
    anagramsMap.set(sorted, word);
  });

  return Array.from(anagramsMap.values());
}

console.log(aclean(arr)); //[ 'PAN', 'hectares', 'era' ]

/*
  We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
  But that doesn’t work:

    let map = new Map();
    map.set("name", "John");
    let keys = map.keys();
    // Error: keys.push is not a function
    keys.push("more");

Why? How can we fix the code to make keys.push work?
*/

/*
  That’s because map.keys() returns an iterable, but not an array.
  We can convert it into an array using Array.from:
*/

const myMap = new Map();
myMap.set("name", "Camilo");

const keys = Array.from(myMap.keys());
keys.push("more");

console.log(keys); // [ 'name', 'more' ]

//Interesting that you can also use sets as keys and it allows you to do === without a reference to the object
// It's a datatype that it's unique and you don't use it for something else like a generator function or a class, so it's use is specific

//Iterating over Maps

const mapOfRandomValues = new Map([
  ["country", "Colombia"],
  ["age", 27],
  ["name", "camilo"],
  ["validated", true],
]);

//For each
console.log("\nfor each \n");
mapOfRandomValues.forEach((value) => console.log(value));

//For of
console.log("\nfor of \n");
for (const value of mapOfRandomValues) {
  console.log(value);
}

//For of with destructuring
console.log("\nfor of with destructuring \n");
for (const [key, value] of mapOfRandomValues) {
  console.log(`${key} - ${value}`);
}

//using keys() values() entries()
console.log("\nkeys \n");
for (let key of mapOfRandomValues.keys()) {
  console.log(key);
}

console.log("\nvalues \n");
for (let value of mapOfRandomValues.values()) {
  console.log(value);
}

console.log("\nentries \n");
for (let entry of mapOfRandomValues.entries()) {
  console.log(entry);
}

console.log("\nfor in: \n");
//Gotta convert it to object
const obj = Object.fromEntries(mapOfRandomValues);

for (let value in obj) {
  console.log(`key: ${value}, value: ${obj[value]}`);
}
