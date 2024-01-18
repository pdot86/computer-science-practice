/**
 * 100) Same Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Amazon, Google, Adobe, LinkedIn, Apple, Microsoft, Facebook, Bloomberg
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return (p === null && q === null) || !!(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
}
