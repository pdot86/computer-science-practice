/**
 * 144) Binary Tree Preorder Traversal
 * Difficulty:  Easy
 * Topics: Stack, Tree, Depth-First Search, Binary Tree
 * Companies: Amazon, Google, Apple, Adobe, Accenture
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

function preorderTraversal(root: TreeNode | null): number[] {
  let preorder: number[] = [];

  function traverse(root: TreeNode | null): void {
    if (root === null) {
      return;
    }
    // node >left > right
    preorder.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);

  return preorder;
}
