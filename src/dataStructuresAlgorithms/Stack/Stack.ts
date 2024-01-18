/**
 * A Stack is a linear data structure that follows a LIFO order (Last In First
 * Out). Items are pushed onto the end of the stack and popped off the end of
 * the stack as well.
 */
export default class Stack extends Array {
  empty() {
    this.length = 0;
  }

  peek() {
    return this[this.length - 1];
  }

  push(item: any): any {
    this[this.length] = item;

    return this[this.length - 1];
  }

  search(item: any, fromIndex: number = 0) {
    return this.indexOf(item, fromIndex);
  }
}
