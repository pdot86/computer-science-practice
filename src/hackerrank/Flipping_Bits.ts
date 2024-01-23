/**
 * Flipping bits
 * Difficulty: Easy
 * Max Score: 40
 * Score: 40
 */

function flippingBits(n: number): number {
  const bin32 = n.toString(2).split('');

  if (bin32.length < 32) {
    while (bin32.length < 32) {
      bin32.unshift('0');
    }
  }

  return parseInt(bin32.map((v) => (v === '0' ? 1 : 0)).join(''), 2);
}
