/**
 * Linked Lists - Print the Elements of a Linked List
 * Difficulty: Easy
 * Max Score: 5
 * Score: 5
 */

function printLinkedList(head) {
  while (head) {
    process.stdout.write(head.data + '\n');
    head = head.next;
  }
}
