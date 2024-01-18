/**
 * 145) Binary Tree Postorder Traversal
 * Difficulty:  Easy
 * Topics: Stack, Tree, Depth-First Search, Binary Tree
 * Companies: Amazon, Apple, Bloomberg, Yahoo
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function postorderTraversal(root: TreeNode | null): number[] {
  let postorder: number[] = [];

  function traverse(root: TreeNode | null): void {
    if (root === null) {
      return;
    }
    // left > right > node
    traverse(root.left);
    traverse(root.right);
    postorder.push(root.val);
  }

  traverse(root);

  return postorder;
}
