// Execute Promises in Sequence
function runPromisesInSequence(tasks) {
  return tasks.reduce((promise, task) => promise.then(task), Promise.resolve());
}

// Example usage
const task1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Task 1 completed"), 1000));
const task2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Task 2 completed"), 1000));
const task3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Task 3 completed"), 1000));
runPromisesInSequence([task1, task2, task3]).then(console.log);
