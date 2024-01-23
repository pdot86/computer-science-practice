/**
 * Mark and Toys
 * Difficulty: Easy
 * Max Score: 35
 * Score: 35
 */

function maximumToys(prices: number[], k: number): number {
  prices.sort((a, b) => a - b);

  let toyCount = 0;

  while (prices.length && k >= prices[0]) {
    let curr = prices.shift() as number;

    if (k >= curr) {
      toyCount += 1;
      k -= curr;
    }
  }

  return toyCount;
}
