/**
 * 232) Implement Queue using Stacks
 * Difficulty:  Easy
 * Topics: Stack, Design, Queue
 * Companies: Microsoft, Amazon, Goldman Sachs, Oracle, Docusign, Apple, Bloomberg
 */

class MyQueue {
  private stack: number[] = [];

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.shift();
  }

  peek(): number {
    return this.stack[0];
  }

  empty(): boolean {
    return !this.stack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
