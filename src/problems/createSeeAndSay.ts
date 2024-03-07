/**
 * PROBLEM: Create a See And Say pattern of n number of levels.
 *
 * - From Meta's practice questions (https://www.facebook.com/careers/life/sample_interview_questions)
 *
 * NOTES: A See And Say pattern is essentially what you would say if you were to
 * read out the count of matching consecutive digits in a number... so for the
 * number "21", the See And Say pattern's next line would be as if you are
 * saying "there is one `2`, and one `1`" which would mean the resulting
 * pattern will be "1211"
 *
 * EXAMPLE: n = 9
 * [
 *  "1",
 *  "11", // 1 one
 *  "21", // 2 ones
 *  "1211", // 1 two, 1 one
 *  "111221", // 1 one, 1 two, 2 ones
 *  "312211", // 3 ones, 2 twos, 1 one
 *  "13112221", // 1 three, 1 one, 2 twos, 2 ones
 *  "1113213211", // 1 one, 1 three, 2 ones, 3 twos, 1 one
 *  "31131211131221", // 3 ones, 1 three, 1 two, 1 one, 1 three, 1 two, 2 ones
 *  "13211311123113112211" // 1 three, 2 ones, 1 three, 1 one, 1 two, 3 ones, 1 three, 1 one, 2 twos, 1 one
 * ]
 */

/**
 * Creates a See and Say pattern of n entries deep.
 * @param n {number} The number of entries to generate
 * @returns string[]
 */
function createSeeAndSay(n: number) {
  // If we are given a negative number, throw an error
  if (n < 0) {
    throw new Error('createSeeAndSay(n:number) n must be greater than 0');
  }

  // Setup our results array
  const result = ['1'];

  // If given 0 entries return our current results which is just 1
  if (n === 0) {
    return result;
  }

  // The first line is 1 one, push that to our results to get started
  result.push('11');

  // If given n = 1, we are all done and can exit early
  if (n === 1) {
    return result;
  }

  // Generate the next n-1 rows...
  while (--n) {
    // Save our previous entry in scope
    let prevEntry = result[result.length - 1];
    // Save our previous digit in scope
    let prevDigit = prevEntry.charAt(0);
    // Setup the count for the previous digit in scope
    let counter = 1;
    // Setup the current entry we are building out in scope
    let currEntry = '';

    // Itterate over the previous entry and for each group of consecutive
    // matching digits count it's length and append the See And Say pattern
    // to the entries
    for (let i = 1; i < prevEntry.length; i++) {
      if (prevDigit !== prevEntry.charAt(i)) {
        currEntry += `${counter}${prevDigit}`;
        prevDigit = prevEntry.charAt(i);
        counter = 1;
      } else {
        counter += 1;
      }
    }

    // Create the last entry as our itteration is done and we have the final
    // count of the final group of matching digits from our previous entry
    currEntry += `${counter}${prevDigit}`;

    // Append the last entry to the result
    result.push(currEntry);
  }

  // Return the resulting pattern
  return result;
}

export default createSeeAndSay;
