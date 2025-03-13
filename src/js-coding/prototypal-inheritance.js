//prototype and prototypal inheritance in JavaScript

//Understanding prototypes
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
person1.greet();
person2.greet();

//Prototypal Inheritance (Using Object.create)
// JavaScript allows us to create objects that inherit from other objects using Object.create.

const animal = {
  type: "Unknown",
  speak() {
    console.log(`I am a ${this.type}`);
  },
};
const dog = Object.create(animal);
dog.type = "Dog";
dog.bark = function () {
  console.log("Woof! Woof!");
};
dog.speak();
dog.bark();

//Prototypal Inheritance with Constructor Functions
//can create a parent constructor and inherit from it.

// Parent constructor
function Animal(type) {
  this.type = type;
}

// Adding a method to Animal's prototype
Animal.prototype.speak = function () {
  console.log(`I am a ${this.type}`);
};

// Child constructor inheriting from Animal
function Dog(name) {
  Animal.call(this, "Dog"); // Call the parent constructor
  this.name = name;
}

// Inherit prototype methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog's prototype
Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof! Woof!`);
};

// Creating an instance
const myDog = new Dog("Buddy");

myDog.speak(); // I am a Dog
myDog.bark(); // Buddy says Woof! Woof!

//Class-Based Inheritance (ES6)
//With ES6, we can use class syntax, which is syntactic sugar over prototype-based inheritance.

class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`I am a ${this.type}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog"); // Call the parent constructor
    this.name = name;
  }

  bark() {
    console.log(`${this.name} says Woof! Woof!`);
  }
}

const myDog2 = new Dog("Charlie");
myDog2.speak(); // I am a Dog
myDog2.bark(); // Charlie says Woof! Woof!
