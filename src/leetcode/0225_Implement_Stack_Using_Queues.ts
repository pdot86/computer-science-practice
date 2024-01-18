/**
 * 225) Implement Stack using Queues
 * Difficulty:  Easy
 * Topics: Stack, Design, Queue
 * Companies: Apple, Oracle, Amazon, Microsoft, Bloomberg, Google
 */

class MyStack {
  private Q;

  constructor() {
    this.Q = [];
  }

  push(x: number): void {
    this.Q.unshift(x);
  }

  pop(): number {
    return this.Q.shift();
  }

  top(): number {
    return this.Q[0];
  }

  empty(): boolean {
    return !this.Q.length;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
