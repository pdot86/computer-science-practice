/**
 * 141) Linked List Cycle
 * Difficulty:  Easy
 * Topics: Hash Table, Linked List, Two Pointers
 * Companies: Amazon, Bloomberg, Microsoft, Google, Uber, Apple, Adobe, Spotify, Goldman Sachs, Oracle, Yandex, Nvidia, Yahoo, Cisco, SAP
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow && slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}
