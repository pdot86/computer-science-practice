/**
 * Sherlock and Anagrams
 * Difficulty: Medium
 * Max Score: 50
 * Score: 50
 */

function sherlockAndAnagrams(s: string): number {
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    let found = new Map();

    for (let j = 0; j + i <= s.length; j++) {
      let substr = s.substr(j, i);
      substr = substr.split('').sort().join('');

      if (found.has(substr)) {
        count += found.get(substr);
        found.set(substr, found.get(substr) + 1);
      } else {
        found.set(substr, 1);
      }
    }
  }

  return count;
}
