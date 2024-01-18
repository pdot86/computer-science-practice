/**
 * 110) Balanced Binary Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Binary Tree
 * Companies: Adobe, Amazon, Google, Facebook, Apple, Bloomberg, Spotify, Uber
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

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root)[0];
}

function dfs(root: TreeNode | null): [boolean, number] {
  if (!root) {
    return [true, 0];
  }

  const [left, right] = [dfs(root.left), dfs(root.right)];
  const balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
  const max = left[1] > right[1] ? left[1] : right[1];

  return [!!balanced, 1 + max];
}
