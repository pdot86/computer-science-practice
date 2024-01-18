/**
 * 206) Reverse Linked List
 * Difficulty:  Easy
 * Topics: Linked List, Recursion
 * Companies: Amazon, Apple, Microsoft, Adobe, Bloomberg, Google, TikTok, Yandex, Oracle, Facebook, ServiceNow, Samsung, Uber, VMware, PayPal, Intuit, Nvidia, Yahoo, ByteDance, Dell, JPMorgan, Canonical, Nagarro, Snapchat, Zenefits, Yelp, Twitter
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    [prev, curr] = [curr, next];
  }

  return prev;
}
