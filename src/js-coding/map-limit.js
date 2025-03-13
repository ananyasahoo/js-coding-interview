//mapLimit in JavaScript
//mapLimit is a utility function that processes an array of items with a concurrency limit. This is useful when dealing with asynchronous tasks like API calls, where we want to control the number of concurrent executions.

async function mapLimit(arr, limit, asyncFn) {
  const results = [];
  const executing = new Set();

  for (const item of arr) {
    const promise = asyncFn(item).then((res) => {
      results.push(res);
      executing.delete(promise);
    });

    executing.add(promise);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  await Promise.allSettled(executing);
  return results;
}

// Example usage
const asyncTask = async (num) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async work
  console.log(`Processed ${num}`);
  return num * 2;
};

(async () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = await mapLimit(numbers, 2, asyncTask);
  console.log("Final Result:", result);
})();
