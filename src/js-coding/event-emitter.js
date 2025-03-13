//EventEmitter implementation in js
// Event Emitter Implementation
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(...args));
  }
}

// Example usage
const emitter = new EventEmitter();

function responseHandler(data) {
  console.log("Event received with data:", data);
}

emitter.on("dataReceived", responseHandler);
emitter.emit("dataReceived", { message: "Hello World" });
emitter.off("dataReceived", responseHandler);
emitter.emit("dataReceived", { message: "This won't be logged" });
