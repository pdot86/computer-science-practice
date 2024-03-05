/**
 * 590) N-ary Tree Postorder Traversal
 * Difficulty:  Easy
 * Topics: Stack, Tree, Depth-First Search
 * Companies:
 */

interface Node {
  val: number;
  children: Node[];
}

function postorder(root: Node | null): number[] {
  let result: number[] = [];

  if (root === null) {
    return result;
  }

  let stack: Node[] = [root];

  while (stack.length) {
    let node = stack.pop();
    if (node) {
      stack.push(...node.children);
      result.unshift(node.val);
    }
  }

  return result;
}
