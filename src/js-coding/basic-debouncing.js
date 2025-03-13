function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage
const logMessage = debounce(
  () => console.log("Debounced function executed!"),
  1000
);

// Calling multiple times, only the last one within 1 second will execute
logMessage();
logMessage();
logMessage();
