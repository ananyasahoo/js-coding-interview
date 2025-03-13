// This implementation ensures compatibility with older JavaScript environments that may not support newer Array.prototype methods.

// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError("Array.prototype.map called on null or undefined");
    }
    var result = [],
      len = this.length;
    for (var i = 0; i < len; i++) {
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return result;
  };
}

//ex:-
const numbers = [1, 2, 3, 4, 5];

// Test map
const squared = numbers.map((num) => num * num);
console.log("Map:", squared);

// Polyfill for Array.prototype.filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError("Array.prototype.filter called on null or undefined");
    }
    var result = [],
      len = this.length;
    for (var i = 0; i < len; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

//ex:-
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Filter:", evens);

// Polyfill for Array.prototype.reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    var i = 0,
      len = this.length,
      accumulator;
    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      while (i < len && !(i in this)) i++;
      if (i >= len)
        throw new TypeError("Reduce of empty array with no initial value");
      accumulator = this[i++];
    }
    for (; i < len; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
}

// Polyfill for Array.prototype.forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArgs) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError(
        "Array.prototype.foreach called on null or undefined"
      );
    }
    var len = this.length;
    for (var i = 0; i < len; i++) {
      if (i in this) {
        callback.call(thisArg, this[i], i, this);
      }
    }
  };
}

// Polyfill for Array.prototype.some
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArgs) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError(
        "Array.prototype.foreach called on null or undefined"
      );
    }
    for (var i = 0; i < this.length; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
}

// Polyfill for Array.prototype.every
if (!Array.prototype.every) {
  Array.prototype.every = function (callback, thisArg) {
    if (this == null || typeof callback !== "function") {
      throw new TypeError("Array.prototype.every called on null or undefined");
    }
    for (var i = 0; i < this.length; i++) {
      if (i in this && !callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}
