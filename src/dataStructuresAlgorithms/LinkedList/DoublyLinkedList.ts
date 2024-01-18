import DoublyLinkedListItem from './DoublyLinkedListItem';

export default class DoublyLinkedList extends Array {
  get first() {
    return this[0];
  }

  get head() {
    return this[0];
  }

  get last() {
    return this[this.length - 1];
  }

  get size() {
    return this.length;
  }

  add(item: { data: any }) {
    const node = new DoublyLinkedListItem({ ...item, next: null, prev: null });

    if (this.size) {
      node.prev = this.last;
      this.last.next = node;

      this.push(node);
    } else {
      this[0] = node;
    }

    return this;
  }

  clear() {
    this.length = 0;

    return this;
  }

  insert(item: { data: any }, before: DoublyLinkedListItem | null = null, after: DoublyLinkedListItem | null = null) {
    if (before !== null) {
      return this.insertBefore(item, before);
    }

    if (after !== null) {
      return this.insertAfter(item, after);
    }

    return this.add(item);
  }

  insertAfter(item: { data: any }, after: DoublyLinkedListItem) {
    for (let [idx, el] of this.entries()) {
      if (el === after) {
        let node = new DoublyLinkedListItem({
          ...item,
          next: after.next,
          prev: after,
        });

        if (after.next) {
          after.next.prev = node;
        }

        after.next = node;

        this.splice(idx + 1, 0, node);

        return this;
      }
    }

    throw new Error('Could not find the "after" DoublyLinkedListItem.');
  }

  insertBefore(item: { data: any }, before: DoublyLinkedListItem) {
    if (this[0] === before) {
      let node = new DoublyLinkedListItem({
        ...item,
        next: before,
        prev: null,
      });

      before.prev = node;

      this.unshift(node);

      return this;
    }

    for (let [idx, el] of this.entries()) {
      if (el.next === before) {
        let node = new DoublyLinkedListItem({
          ...item,
          next: before,
          prev: el,
        });

        before.prev = node;

        el.next = node;

        this.splice(idx + 1, 0, node);

        return this;
      }
    }

    throw new Error('Could not find the "before" DoublyLinkedListItem.');
  }

  remove(item: DoublyLinkedListItem) {
    for (let [idx, el] of this.entries()) {
      if (item === el) {
        return this.removeIndex(idx);
      }
    }

    return null;
  }

  removeIndex(idx: number) {
    const node = this[idx] || null;

    if (node !== null) {
      const { next, prev } = node;
      if (idx === 0) {
        next.prev = null;
      } else {
        prev.next = next;
      }

      this.splice(idx, 1);
    }

    return node;
  }

  rotate(n: number) {
    if (!n || this.length <= 1) {
      return this;
    }

    let remainder = n % this.length;

    if (remainder > 0) {
      while (remainder--) {
        const node = this.pop();

        node.next = this[0];
        node.prev = null;

        this[0].prev = node;
        this[this.length - 1].next = null;

        this.unshift(node);
      }
    } else if (remainder < 0) {
      while (remainder++) {
        const node = this.shift();

        node.next = null;
        node.prev = this[this.length - 1];

        this[0].prev = null;
        this[this.length - 1].next = node;

        this.push(node);
      }
    }

    return this;
  }

  toArray() {
    return this.map((v) => v.data);
  }
}
