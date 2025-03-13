function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

function flatArr(arr) {
  return arr.flat(Infinity);
}

const array = [1, 2, [3, [4, 5]]];
console.log(flattenArray(array));
console.log(flatArr(array));
