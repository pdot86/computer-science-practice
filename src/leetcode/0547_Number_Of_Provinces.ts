/**
 * 547) Number of Provinces
 * Difficulty:  Medium
 * Topics: Depth-First Search, Breadth-First Search, Union Find, Graph
 * Companies: Amazon, Google, DoorDash, Sprinklr, Apple, Bloomberg, Goldman Sachs, TikTok, Two Sigma
 */

function findCircleNum(isConnected: number[][]): number {
  if (isConnected === null) {
    return 0;
  }

  const len = isConnected.length;

  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return 1;
  }

  let count = 0;
  let visited: Set<number> = new Set();

  for (let i = 0; i < len; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i, visited, isConnected);
    }
  }

  return count;
}

function dfs(i: number, visited: Set<number>, graph: number[][]) {
  visited.add(i);

  for (let j = 1; j < graph.length; j++) {
    if (graph[i][j] === 1 && !visited.has(j)) {
      dfs(j, visited, graph);
    }
  }
}
