/**
 * Return the digit at the given index from a number.
 */

/**
 * Returns the digit at index "i" from the number "subj".
 *
 * @param i {number} The index or place at which you wish to pull the digit from
 * @param subj {number} The number you wish to pull a digit from
 * @returns {number}
 */
function getDigitAt(i: number, subj: number): number {
  return Math.floor(Math.abs(subj) / Math.pow(10, i)) % 10;
}

export default getDigitAt;
