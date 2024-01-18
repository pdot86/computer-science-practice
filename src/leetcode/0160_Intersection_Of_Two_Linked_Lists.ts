/**
 * 160) Intersection of Two Linked Lists
 * Difficulty:  Easy
 * Topics: Hash Table, Linked List, Two Pointers
 * Companies: Amazon, Nvidia, Uber, Bloomberg, Microsoft, Apple, Airbnb, TikTok, Facebook, Adobe, LinkedIn, Oracle, Goldman Sachs, carwale
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    if (!a) {
      a = headB;
    } else {
      a = a.next;
    }

    if (!b) {
      b = headA;
    } else {
      b = b.next;
    }
  }

  return a;
}
