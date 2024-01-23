/**
 * Library Fine
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
  if (y1 > y2) {
    return 10000;
  }

  if (y1 < y2) {
    return 0;
  }

  if (m1 > m2) {
    return (m1 - m2) * 500;
  }

  if (m1 < m2) {
    return 0;
  }

  if (d1 > d2) {
    return (d1 - d2) * 15;
  }

  return 0;
}
