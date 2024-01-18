/**
 * 226) Invert Binary Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Google, Amazon, Oracle, Apple, Microsoft, Facebook, Uber, Yahoo, Bloomberg, Adobe
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

// Recursive
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.right);
  invertTree(root.left);

  return root;
}

// Depth First Search
/*
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
      return root;
  }

  dfs(root);

  return root;
}

function dfs (root: TreeNode | null): TreeNode | null {
  if (!root || !root.left && !root.right) { return; }

  [root.left, root.right] = [root.right, root.left];
  dfs(root.left);
  dfs(root.right);
}
*/
