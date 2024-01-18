/**
108) Convert Sorted Array to Binary Search Tree
 * Difficulty:  Easy
 * Topics: Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree
 * Companies: Amazon, Apple, Microsoft, Adobe, Yahoo, Oracle, Airbnb
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);

  return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1)));
}
