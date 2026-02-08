// reference type
var obj1 = { a: 1 };
var obj2 = obj1; // obj2 references the same object as obj1
var obj3 = { a: 1 }; // obj3 is a new object with the same content as obj1

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true
console.log(obj1 == obj3); // false (different objects in memory)
console.log(obj1 === obj3); // false (different objects in memory)


