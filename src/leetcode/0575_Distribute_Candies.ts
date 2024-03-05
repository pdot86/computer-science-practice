/**
 * 575) Distribute Candies
 * Difficulty:  Easy
 * Topics: Array, Hash Table
 * Companies: LiveRamp
 */

function distributeCandies(candyType: number[]): number {
  const goal = Math.floor(candyType.length / 2);
  const types = [...new Set(candyType)];

  if (types.length >= goal) {
    return goal;
  } else {
    const candyMap = new Map();

    candyType.forEach((v) => {
      if (candyMap.has(v)) {
        candyMap.set(v, candyMap.get(v) + 1);
      } else {
        candyMap.set(v, 1);
      }
    });

    let bag = new Map();

    let i = 0;
    let j = 0;

    while (i < goal && j < types.length) {
      if (bag.has(types[j])) {
        bag.set(types[j], bag.get(types[j]) + 1);
      } else {
        bag.set(types[j], 1);
      }
      j += 1;
      i += 1;

      if (j === types.length && i < goal) {
        j = 0;
      }
    }

    return bag.size;
  }
}
