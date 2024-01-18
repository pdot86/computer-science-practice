/**
 * 24) Swap Nodes in Pairs
 * Difficulty:  Medium
 * Topics: Linked List, Recursion
 * Companies: Amazon, Adobe, Bloomberg, Apple, Google, Flipkart, Microsoft, Facebook, Walmart Labs, Uber
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let node = head;

  while (node && node.next) {
    [node.val, node.next.val] = [node.next.val, node.val];
    node = node.next.next;
  }

  return head;
}
