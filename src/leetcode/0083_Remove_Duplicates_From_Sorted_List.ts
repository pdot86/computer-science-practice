/**
 * 83) Remove Duplicates from Sorted List
 * Difficulty:  Easy
 * Topics: Linked List
 * Companies: Amazon, Google, Uber, Apple, Adobe, Microsoft, Bloomberg, Facebook, Yahoo, Qualcomm, Walmart Labs
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let list = head;

  while (head.next) {
    if (head.val !== head.next.val) {
      head = head.next;
    } else if (head.next.next) {
      head.next = head.next.next;
    } else {
      head.next = null;
    }
  }

  return list;
}
