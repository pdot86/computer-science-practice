/**
 * A sorting algorithm which is terribly inefficient and is more or less a game
 * of luck. There are two versions of this algorithm- deterministic and random.
 * In this random version you continually repeat the process of shuffling the
 * array and checking if sorted until the random generation sorts it.
 *
 * TIME COMPLEXITY: Ο(∞)
 *
 * SPACE COMPLEXITY: Ο(1)
 *
 * IN/OUT-OF-PLACE: in-place
 *
 * STABILITY: unstable
 *
 * COMPARISON SORT: comparison
 *
 * @param arr {number[]} An unsorted array of numbers
 * @param type {'random'|'deterministic'} The type of bogoSort to use
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function bogoSort(arr: number[], type: 'random' | 'deterministic' = 'random'): number[] {
  if (type === 'random') {
    return randomBogoSort(arr);
  } else {
    return deterministicBogoSort(arr);
  }
}

/**
 * The random version of Bogosort, where you randomly swap indicies around in the
 * array until you end up with a sorted array.
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function randomBogoSort(arr: number[]): number[] {
  console.log('using random bogosort');
  const isSorted = (a: number[]) => a.every((v, i) => i === 0 || v >= a[i - 1]);
  const shuffle = (a: number[]) => {
    for (let i = 1; i < a.length; i++) {
      const j = Math.floor(Math.random() * (a.length - 0) + 0);
      const k = Math.floor(Math.random() * (a.length - 0) + 0);

      [a[j], a[k]] = [a[k], a[j]];
    }

    return a;
  };

  while (!isSorted(arr)) {
    shuffle(arr);
  }

  return arr;
}

/**
 * The deterministic version of Bogosort, where you calculate all possible
 * permutations of the array to find the permutation that is properly sorted.
 * @param arr {number[]} An unsorted array of numbers
 * @returns {number[]} The array of numbers sorted in increasing order
 */
function deterministicBogoSort(arr: number[]): number[] {
  console.log('using deterministic bogo sort');
  const isSorted = (a: number[]) => a.every((v, i) => i === 0 || v >= a[i - 1]);
  const getPermutations = (a: number[]) => {
    if (a.length <= 1) {
      return a.length === 0 ? [] : [a];
    }

    const permutResults: number[][] = [];

    for (let i = 0; i < a.length; i++) {
      const curr = a[i];
      const rest = a.slice(0, i).concat(a.slice(i + 1));
      const restPermuts = getPermutations(rest);

      for (let j = 0; j < restPermuts.length; j++) {
        permutResults.push([curr].concat(restPermuts[j]));
      }
    }

    return permutResults;
  };
  const permutations = getPermutations(arr);

  const sortedPermutation = permutations[permutations.findIndex(isSorted)];

  return sortedPermutation;
}

export default bogoSort;
