// reference type
var obj1 = { a: 1 };
var obj2 = obj1; // obj2 references the same object as obj1
var obj3 = { a: 1 }; // obj3 is a new object with the same content as obj1

console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true
console.log(obj1 == obj3); // false (different objects in memory)
console.log(obj1 === obj3); // false (different objects in memory)

// context vs scope
// scope - where a variable is accessible
// context - what "this" refers to
function b() {
  let a = 4; // scope
  console.log(this); // context
}

const obj4 = {
    a: function() {
        console.log(this); // context
    }
}

