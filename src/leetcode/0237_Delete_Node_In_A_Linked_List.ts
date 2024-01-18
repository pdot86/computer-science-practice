/**
 * 237) Delete Node in a Linked List
 * Difficulty:  Medium
 * Topics: Linked List
 * Companies: Amazon, Apple, Adobe, Bloomberg, Google, Facebook, Nagarro, Microsoft
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
let prev;
function deleteNode(root: ListNode | null): void {
  if (root.next !== null) {
    prev = root;
    root.val = root.next.val;
    deleteNode(root.next);
  } else {
    prev.next = null;
  }
}
