class ChainCalculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }
  multiply(num) {
    this.value *= num;
    return this;
  }
  divide(num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.error("Cannot divide by zero");
    }
    return this;
  }
  getResult() {
    return this.value;
  }
}
const result = new ChainCalculator(10)
  .add(5)
  .subtract(3)
  .multiply(2)
  .divide(3)
  .getResult();
console.log(result); // Output: 8
