/**
 * 589) N-ary Tree Preorder Traversal
 * Difficulty:  Easy
 * Topics: Stack, Tree, Depth-First Search
 * Companies: Google
 */

interface Node {
  val: number;
  children: Node[];
}

function preorder(root: Node | null): number[] {
  let result: number[] = [];

  if (root === null) {
    return result;
  }

  let stack: Node[] = [root];

  while (stack.length) {
    let node = stack.shift();
    if (node) {
      node.children.length && stack.unshift(...node.children);
      result.push(node.val);
    }
  }

  return result;
}
