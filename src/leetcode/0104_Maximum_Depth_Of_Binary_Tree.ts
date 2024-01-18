/**
 * 104) Maximum Depth of Binary Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Amazon, Yahoo, Google, Apple, Yandex, Adobe, LinkedIn, Microsoft, Spotify, Facebook, Bloomberg, Uber
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

function maxDepth(root: TreeNode | null): number {
  function maxDepthRecursive(root, i) {
    if (root === null) {
      return i;
    }

    return Math.max(maxDepthRecursive(root.left, i + 1), maxDepthRecursive(root.right, i + 1));
  }

  return maxDepthRecursive(root, 0);
}
