/**
 * PROBLEM: Determine if two given words are within one edit of each other.
 *
 * - From Meta's practice questions (https://www.facebook.com/careers/life/sample_interview_questions)
 *
 * NOTES:
 *  - An EDIT is defined as:
 *      - Inserting a character
 *      - Removing a character
 *      - Replacing a character
 * - Swapping positions of a character is NOT allowed- this consists of 2 edits,
 *   replacing each character
 *
 * EXAMPLE: 'cat', 'dog'
 *  - 'c' !== 'd' ... +1 edit (replace)
 *  - 'a' !== 'o' ... +1 edit (replace)
 *  - 't' !== 'g' ... +1 edit (replace)
 *  - requires 3 total edit(s)
 *  > FALSE
 *
 * EXAMPLE: 'cat', 'cats'
 *  - 'c' === 'c'
 *  - 'a' === 'a'
 *  - 't' === 't'
 *  - '' !== 's' ... +1 edit (insert/remove)
 *  - requires 1 total edit(s)
 *  > TRUE
 *
 * EXAMPLE: 'cat', 'cut'
 *  - 'c' === 'c'
 *  - 'a' !== 'u' ... +1 edit (replace)
 *  - 't' === 't'
 *  - requires 1 total edit(s)
 *  > TRUE
 *
 * EXAMPLE: 'cat', 'cast'
 *  - 'c' === 'c'
 *  - 'a' === 'a'
 *  - 't' !== 's' ... +1 edit (insert/remove)
 *  - 't' === 't'
 *  - requires 1 total edit(s)
 *  > TRUE
 *
 * EXAMPLE: 'cat', 'at'
 *  - 'c' !== 'a' ... +1 edit (insert/remove)
 *  - 'a' === 'a'
 *  - 't' === 't'
 *  - requires 1 total edit(s)
 *  > TRUE
 *
 * EXAMPLE: 'cat', 'act'
 *  - 'c' !== 'a' ... +1 edit (replace)
 *  - 'a' !== 'c' ... +1 edit (replace)
 *  - 't' === 't'
 *  - requires 2 total edit(s)
 *  > FALSE
 */

/**
 * Determines if you can edit wordA to become wordB with a set amount of edits.
 * An edit is defined as either:
 *    - inserting a character
 *    - removing a character
 *    - replacing a character
 * NOTE: you can not swap places of characters- you must replace both characters
 *
 * @param wordA {string} The first word to compare
 * @param wordB {string} The second word to compare
 * @param maxDistance {number} The maximum number of edits allowed, default: 1
 * @returns {boolean}
 */
function withinEditDistance(wordA: string, wordB: string, maxDistance: number = 1) {
  // Setup some variables for our two words so we are not mutating the arguments
  let a = wordA;
  let b = wordB;

  // Sort our words from shortest to longest for consistancy
  if (wordA.length > wordB.length) {
    a = wordB;
    b = wordA;
  }

  // If the length is more than one off we know there is more than one edit
  // so we can return false early
  if (b.length - a.length > maxDistance) {
    return false;
  }

  // Itterate through the 2 words' characters comparing each index.
  // Matching indicies only increment the index counters
  // Non-matching indicies always increment the edit count and index counter;
  // however, if one word is longer decrement the secondary index counter to
  // make up for the chars that need to be removed after (we only need to check
  // if `a` is longer than `b` because we already sorted them by length)
  let edits = 0;
  let i; // index of a
  let j; // index of b

  for (i = 0, j = 0; i < a.length && j < b.length; i++, j++) {
    if (a.charAt(i) === b.charAt(j)) {
      continue;
    } else {
      if (edits < maxDistance) {
        edits += 1;

        if (a.length < b.length) {
          j--;
        }
      } else {
        return false;
      }
    }
  }

  // If we never reached the end of `b` then we need to remove each additional
  // character adding to our edit count
  if (j < b.length) {
    edits += b.length - a.length;
  }

  // Return a boolean of whether or not our total count of edits is less than or
  // equal to one.
  return edits <= maxDistance;
}

export default withinEditDistance;
