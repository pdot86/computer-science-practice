/**
 * 111) Minimum Depth of Binary Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Facebook, Amazon, Google, Bloomberg, Uber
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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let min = Infinity;

  dfs(root, 0);

  function dfs(node: TreeNode | null, depth: number): void {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      min = Math.min(min, depth + 1);
    }

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  return min;
}
