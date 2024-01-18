/**
 * 40) Combination Sum II
 * Difficulty:  Medium
 * Topics: Array, Backtracking
 * Companies: TikTok, Amazon, Uber, Facebook, Adobe, Bloomberg, Reddit, Airbnb, Google, Apple, Oracle, Snapchat
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  if (!candidates) {
    // No results
    return [];
  }

  if (target === 0) {
    // Empty
    return [[]];
  }

  // Sort candidates so we can pull in order
  candidates.sort((a, b) => {
    return a - b;
  });

  // Set a place to store all possible paths
  const paths = [];

  // Create a backtracking method
  function backtrack(track, path, idx) {
    if (track === 0) {
      // valid path found - store it
      paths.push(path);
      return;
    } else {
      // within the length of candidates and only candidates that keep target above or equal to 0
      while (idx < candidates.length && track - candidates[idx] >= 0) {
        // recursively backtrack lowering the total, and cloning the path array, and increasing the index
        backtrack(track - candidates[idx], [...path, candidates[idx]], idx + 1);

        // remove the candidate
        idx += 1;

        // remove dupes
        while (candidates[idx - 1] === candidates[idx]) {
          idx += 1;
        }
      }
    }
  }

  backtrack(target, [], 0);

  return paths;
}
