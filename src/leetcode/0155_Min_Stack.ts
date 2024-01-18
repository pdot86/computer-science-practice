/**
 * 155) Min Stack
 * Difficulty:  Medium
 * Topics: Stack, Design
 * Companies: Bloomberg, Amazon, Yandex, Tinkoff, Apple, Adobe, Yahoo, Qualcomm, Microsoft, Expedia, Facebook, Salesforce, Oracle, Veeva, Lyft, Cisco, Walmart Labs, Nvidia, ServiceNow, Arcesium, Google, Uber, Snapchat, Zenefits
 */

class MinStack {
  private stack: Array<number> = [];
  private min: number = Number.MAX_SAFE_INTEGER;

  push(val: number): void {
    this.stack.push(val);
    this.min = val < this.min ? val : this.min;
  }

  pop(): void {
    if (this.stack.pop() === this.min) {
      this.min = this.stack.reduce((acc, curr) => {
        acc = curr < acc ? curr : acc;

        return acc;
      }, Number.MAX_SAFE_INTEGER);
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
