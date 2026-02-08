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

// instantiation
// is a way to create multiple instances of an object type
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// extends keyword is used to create a subclass
// subclass inherits properties and methods from the parent class
// subclass can have its own properties and methods
// subclass can override methods from the parent class
class Wizard extends Player {
    constructor(name, type) {
        console.log('wizard', this);
        super(name, type);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Classic Inheritance Example
var Player1 = function(name, type) {
    this.name = name;
    this.type = type;
}

// methods are added to the prototype of the constructor function
Player1.prototype.introduce = function() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
}
var wizard3 = new Player1('Shelly', 'Healer');
var wizard4 = new Player1('Shawn', 'Dark Magic');

wizard3.introduce();
wizard4.introduce();
