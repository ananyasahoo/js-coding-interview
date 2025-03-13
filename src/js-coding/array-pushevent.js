// If you want to create a custom event that triggers whenever an item is pushed into an array, you can override the push method and dispatch a custom event.

// Custom event for Array push
(function () {
  var originalPush = Array.prototype.push;
  Array.prototype.push = function (...items) {
    var result = originalPush.apply(this, items);

    // Dispatch custom event
    if (typeof window !== "undefined") {
      var event = new CustomEvent("arrayPush", {
        detail: {
          pushedItems: items,
          newArray: this,
        },
      });
      window.dispatchEvent(event);
    }
    return result;
  };
})();

// Example usage
window.addEventListener("arrayPush", function (e) {
  console.log("Array push event triggered!");
  console.log("Pushed Items:", e.detail.pushedItems);
  console.log("New Array:", e.detail.newArray);
});
const arr = [3, 4, 5];
arr.push(1, 2);
