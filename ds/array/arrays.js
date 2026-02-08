const strings = ['a','b','c','d'];
// 4*4 = 16 bytes of storage
// computer storage is allocated in blocks of memory
// each block is 16 bytes
// so when we add a new element, if there is space in the current block, it will be added there
// if there is no space, a new block of memory will be allocated, and all elements will be copied over to the new block

// access
strings[2] // O(1) - direct access via index

// push
strings.push('e'); // O(1) - if there is space in the current block

// pop
strings.pop(); // O(1) - removes last element

// shift
strings.shift(); // O(n) - all elements need to be shifted

// unshift
strings.unshift('x'); // O(n) - all elements need to be shifted

// splice
strings.splice(2, 0, 'alien'); // O(n) - elements need to be shifted

// insert
strings[4] = 'e'; // O(1) - if there is space in the current block

// delete
delete strings[2]; // O(1) - removes element but does not shift

console.log(strings);