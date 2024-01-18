/**
 * 434) Number of Segments in a String
 * Difficulty:  Easy
 * Topics: String
 * Companies:
 */

function countSegments(s: string): number {
  let count = 0;
  let reset = true;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== ' ') {
      if (reset) {
        count += 1;
        reset = false;
      }
    } else {
      reset = true;
    }
  }

  return count;
}
