/**
 * 21) Merge Two Sorted Lists
 * Difficulty:  Easy
 * Topics: Linked List, Recursion
 * Companies: Amazon14, Adobe9, Google9, Apple7, Facebook6, Media.net6, Microsoft5, Hubspot4, Bloomberg4, Uber3, Yahoo2, Oracle2, Yandex2, Snapchat2, Expedia2, Indeed3, Visa3, Shopee3, Snowflake3, Accenture2, VMware2, Walmart Labs2, eBay2, tcs2, ZScaler2, Synology2, Avito2, LinkedIn, Wix
 */

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head: ListNode = new ListNode();
  let cursor: ListNode = head;

  while (l1 !== null && l2 !== null && l1.val >= -100 && l2.val <= 100) {
    if (l1.val <= l2.val) {
      cursor.next = l1;
      l1 = l1.next;
    } else {
      cursor.next = l2;
      l2 = l2.next;
    }

    cursor = cursor.next;
  }

  cursor.next = l1 || l2;

  return head.next;
}
