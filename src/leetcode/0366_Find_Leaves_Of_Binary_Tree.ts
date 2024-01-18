/**
 * 366) Find Leaves of Binary Tree
 * Difficulty:  Medium
 * Topics: Tree, Depth-First Search, Binary Tree
 * Companies: Google, LinkedIn, Amazon, Microsoft, Facebook, Bloomberg, Adobe
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

function findLeaves(root: TreeNode | null): number[][] {
  const out: number[][] = [];

  function getLayer(root: TreeNode | null): number {
    if (root === null) {
      return -1;
    }

    const left = getLayer(root.left);
    const right = getLayer(root.right);

    const layer = (left > right ? left : right) + 1;

    if (out.length === layer) {
      out.push([]);
    }

    out[layer].push(root.val);

    return layer;
  }

  getLayer(root);

  return out;
}
