/**
 * A Queue is a linear data structure that follows a FIFO order (First In First
 * Out), much like a line (or queue) of people waiting for something. Items
 * are queued and dequeued and it shares many similarities with a stack/array.
 */
export default class Queue extends Array {
  add(element: any) {
    this.push(element);

    return true;
  }

  dequeue() {
    return this.shift();
  }

  enqueue(element: any) {
    return this.add(element);
  }

  element() {
    return this.peek();
  }

  offer(element: any) {
    return this.add(element);
  }

  peek() {
    return this.length ? this[0] : null;
  }

  poll() {
    return this.dequeue();
  }

  remove() {
    return this.dequeue();
  }
}
