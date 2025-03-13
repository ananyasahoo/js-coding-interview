// I've added an asyncTaskWithDependency function that takes a task and its dependency, waits for the dependency to resolve, then processes the result asynchronously

async function asyncWithDepedency(task, dependency) {
  try {
    const result = await dependency();
    return await task(result);
  } catch (error) {
    console.error("Error in asyncTaskWithDependency:", error);
  }
}

// Example usage
async function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Fetched Data"), 1000)
  );
}

async function processData(data) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Processed: ${data}`), 1000)
  );
}

asyncTaskWithDependency(processData, fetchData).then(console.log);
