/**
 * 2) Add Two Numbers
 * Difficulty: Medium
 * Topics: Linked List, Math, Recursion
 * Companies: Amazon, Bloomberg, Apple, Google, Adobe, Microsoft, Facebook, Avito, Nvidia, Uber, Yahoo, Yandex, Oracle, Cisco, Arista Networks, IBM, Expedia, JPMorgan, SAP, Capital One, Visa, Huawei, Paytm, josh technology, Airbnb, Wix
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0;
  let head = new ListNode(0);
  let tail = head;

  while (l1 || l2 || carry > 0) {
    let d1 = (l1 && l1.val) || 0;
    let d2 = (l2 && l2.val) || 0;

    let sum = d1 + d2 + carry;
    let digit = sum % 10;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(digit);
    tail = tail.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  let result = head.next;

  return result;
}
