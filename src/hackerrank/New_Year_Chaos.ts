/**
 * New Year Chaos
 * Difficulty: Medium
 * Max Score: 40
 * Score: 40
 */

function minimumBribes(q: number[]): void {
  const len = q.length;
  let bribes = 0;

  // Loop over q to determine if each person bribed too many people
  for (let i = len - 1; i >= 0; i--) {
    // Is the current person in the queue more than 2 spots in front of their original position?
    if (q[i] - (i + 1) > 2) {
      // Yes, it is too chaotic, print and exit early
      process.stdout.write('Too chaotic' + '\n');
      return;
    } else {
      // No, determine if the current person bribed anyone
      for (let j = Math.max(0, q[i] - 2); j < i; j++) {
        if (q[j] > q[i]) {
          bribes += 1;
        }
      }
    }
  }

  process.stdout.write(bribes + '\n');
}
