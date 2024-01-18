/**
 * 441) Arranging Coins
 * Difficulty:  Easy
 * Topics: Math, Binary Search
 * Companies: Google, Adobe, Amazon, Bloomberg, Atlassian, GoDaddy
 */

function arrangeCoins(n: number): number {
  if (n < 2) {
    return n;
  }

  let i = 1;

  while (n > 0) {
    n -= i;

    if (n > 0) {
      i += 1;
    }
  }

  if (n < 0) {
    i -= 1;
  }

  return i;
}
