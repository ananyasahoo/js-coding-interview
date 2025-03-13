function throttle(func, limit) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall >= limit) {
      lastcall = now;
      func.apply(this, args);
    }
  };
}

// Example usage
const throttledLog = throttle(
  () => console.log("Throttled function executed!"),
  1000
);

// Calling multiple times, only one execution per second
throttledLog();
throttledLog();
throttledLog();
