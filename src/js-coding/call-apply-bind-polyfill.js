// Call, Apply, and Bind Example
const person = {
  name: "John",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  },
};

const anotherPerson = { name: "Jane" };

// Using call
person.greet.call(anotherPerson, "Hello", "!"); // Hello, my name is Jane!

// Using apply
person.greet.apply(anotherPerson, ["Hi", "!!"]); // Hi, my name is Jane!!

// Using bind
const boundGreet = person.greet.bind(anotherPerson, "Hey");
boundGreet("!!!"); // Hey, my name is Jane!!!

// Polyfill for call
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall is not callable");
  }

  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// Polyfill for apply
Function.prototype.myApply = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply is not callable");
  }

  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// Polyfill for Bind
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind is not callable");
  }
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};

// Example usage of polyfills
function testFunc(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

testFunc.myCall(anotherPerson, "Hello", "!");
testFunc.myApply(anotherPerson, ["Hi", "!!"]);
const boundTestFunc = testFunc.myBind(anotherPerson, "Hey");
boundTestFunc("!!!");
