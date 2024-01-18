/**
 * 101) Symmetric Tree
 * Difficulty:  Easy
 * Topics: Tree, Depth-First Search, Breadth-First Search, Binary Tree
 * Companies: Apple, Amazon, Adobe, Yandex, Microsoft, TikTok, Google, LinkedIn, Facebook, Bloomberg, Uber, ByteDance, VMware
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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  function isNodeSymmetric(nodeL: TreeNode | null, nodeR: TreeNode | null) {
    if (nodeL === null && nodeR === null) {
      return true;
    }
    if (nodeL === null || nodeR === null) {
      return false;
    }
    if (nodeL.val !== nodeR.val) {
      return false;
    }

    return isNodeSymmetric(nodeL.left, nodeR.right) && isNodeSymmetric(nodeL.right, nodeR.left);
  }

  return isNodeSymmetric(root.left, root.right);
}
