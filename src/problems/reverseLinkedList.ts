/**
 * Takes in a linked list item and reverses the linked list.
 * This does things in place so it uses less memory.
 * @param head {LinkedListItem|null} A linked list item
 * @returns {LinkedListItem|null}
 */
function reverseLinkedList(head: LinkedListItem | null) {
  let prev = null;

  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }

  return prev;
}

/**
 * Takes in a linked list item and reverses the linked list.
 * This version is more verbose and helps explain what is going on more
 * clearly, but does use more memory as you are creating 3 new values
 * with each itteration.
 * @param head {LinkedListItem|null} A linked list item
 * @returns {LinkedListItem|null}
 */
function reverseLinkedListVerbose(head: LinkedListItem | null) {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

type LinkedListItem = {
  val: any;
  next: LinkedListItem | null;
  prev: LinkedListItem | null;
} | null;
