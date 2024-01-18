import SingleLinkedListItem from './SingleLinkedListItem';

export default class CircularLinkedList extends Array {
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

  add(item: { data: any }): CircularLinkedList {
    if (this.size) {
      this[this.size] = new SingleLinkedListItem({ ...item, next: this[0] });
      this[this.size - 2].next = this.last;
    } else {
      this[0] = new SingleLinkedListItem({ ...item, next: this[0] });
    }

    return this;
  }

  clear(): void {
    this.length = 0;
  }

  insert(item: { data: any }, before: SingleLinkedListItem | null = null, after: SingleLinkedListItem | null = null): CircularLinkedList {
    if (before !== null) {
      return this.insertBefore(item, before);
    }

    if (after !== null) {
      return this.insertAfter(item, after);
    }

    return this.add({ ...item });
  }

  insertAfter(item: { data: any }, after: SingleLinkedListItem): CircularLinkedList {
    for (let [idx, el] of this.entries()) {
      if (el === after) {
        let node = new SingleLinkedListItem({ ...item, next: after.next });

        after.next = node;

        this.splice(idx + 1, 0, node);

        return this;
      }
    }

    throw new Error('Could not find the "after" SingleLinkedListItem.');
  }

  insertBefore(item: { data: any }, before: SingleLinkedListItem): CircularLinkedList {
    if (this[0] === before) {
      let node = new SingleLinkedListItem({ ...item, next: before });

      this.unshift(node);

      return this;
    }

    for (let [idx, el] of this.entries()) {
      if (el.next === before) {
        let node = new SingleLinkedListItem({ ...item, next: before });

        el.next = node;

        this.splice(idx + 1, 0, node);

        return this;
      }
    }

    throw new Error('Could not find the "before" SingleLinkedListItem.');
  }

  remove(item: SingleLinkedListItem): SingleLinkedListItem | null {
    for (let [idx, el] of this.entries()) {
      if (item === el) {
        return this.removeIndex(idx);
      }
    }

    return null;
  }

  removeIndex(idx: number): SingleLinkedListItem | null {
    const node = this[idx] || null;

    if (node !== null) {
      if (idx === 0 || idx === this.length - 1) {
        idx ? this.pop() : this.shift();

        this.last.next = this.head;
      } else {
        const prev = this[idx - 1];

        if (prev) {
          const next = node.next;

          prev.next = next;
        }

        this.splice(idx, 1);
      }
    }

    return node;
  }

  rotate(n: number): CircularLinkedList {
    if (!n || this.length <= 1) {
      return this;
    }

    let remainder = n % this.length;

    if (remainder > 0) {
      while (remainder--) {
        const node = this.pop();

        node.next = this[0];

        this[this.length - 1].next = node;

        this.unshift(node);
      }
    } else if (remainder < 0) {
      while (remainder++) {
        const node = this.shift();

        node.next = null;

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
