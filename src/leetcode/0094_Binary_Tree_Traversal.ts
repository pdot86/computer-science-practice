/**
 * 94) Binary Tree Inorder Traversal
 * Difficulty:  Easy
 * Topics: Stack, Tree, Depth-First Search, Binary Tree
 * Companies: Adobe, Amazon, Facebook, Uber, Google, Apple, Bloomberg, Microsoft
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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let result = [];

  if (root.left) {
    result = result.concat(inorderTraversal(root.left));
  }

  result.push(root.val);

  if (root.right) {
    result = result.concat(inorderTraversal(root.right));
  }

  return result;
}
