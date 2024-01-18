/**
 * 112) Path Sum
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Amazon, Microsoft, Facebook, Bloomberg, Adobe, Google, Uber
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
