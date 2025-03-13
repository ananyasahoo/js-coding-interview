// Pipe: Left-to-right function composition
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

// Compose: Right-to-left function composition
const compose =
  (...fns) =>
  (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Example functions
const double = (x) => x * 2;
const square = (x) => x * x;
const increment = (x) => x + 1;

// Using pipe (left to right)
const processPipe = pipe(increment, double, square);
console.log(processPipe(2)); // ((2+1) * 2)² = 36

// Using compose (right to left)
const processCompose = compose(square, double, increment);
console.log(processCompose(2)); // (2+1) * 2² = 36
