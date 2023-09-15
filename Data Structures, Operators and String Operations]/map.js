"use strict";

const rest = new Map();
// Inserting value in the map
rest.set(1, "Virgin Mojito");
rest.set(2, "Blue Ocean");

console.log(rest);

// getting size of the map
const mapSize = rest.size;
console.log(mapSize);

// deleting particular key from map
console.log(rest.delete(1));

console.log(rest.set("123", 23944));

// Clear all the elements from teh map
rest.clear();
console.log(rest);

rest.set("name", "Ishan");
console.log(rest.has("name") ? "Key Found" : "key not found");

// In map we can also use array / list / object as keys for maps

console.log(rest.set([1, 2], "Array 1"));

// Retriving value in maps
// console.log(rest.get([1,2]));
// Above statment will not work because as we are using get method in that we are creating new array which is storea as different reference not same as above as of set([1,2]) as we get undefined here, detailed explanation below

// The code you provided will not work as expected in JavaScript because of how objects (including arrays) are used as keys in a Map.

// In JavaScript, when you use an array (or any object) as a key in a Map or an object literal, it's actually treated as a reference to the object. This means that when you try to retrieve a value from the Map using the get method, you need to use the exact same reference to the object that was used as the key.

// In your code:

// javascript
// Copy code
// const rest = new Map();
// console.log(rest.set([1, 2], "Array 1"));

// You are setting a key-value pair in the Map where the key is a new array [1, 2]. However, when you try to retrieve the value using rest.get([1,2]), you are creating a new array [1, 2], which is a different reference from the one used as the key when setting the value in the Map. As a result, rest.get([1,2]) will return undefined because the Map cannot find a matching key.

// IMP

// to make it work we have to use same reference as we mentioned in set method
// for that we can create new variable and store exact same value and then pass and retrieve as with same reference

const arrayKey = [1, 23, 4];
rest.set(arrayKey, "arrayKeyValue1");

console.log(rest.get(arrayKey));
