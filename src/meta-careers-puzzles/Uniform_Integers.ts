/**
 * Uniform Integers
 * - Level 1
 *
 * A positive integer is considered uniform if all of its digits are equal.
 * For example, `222` is uniform, while `223` is not.
 *
 * Given two positive integers `A` and `B`, determine the number of uniform
 * integers between `A` and `B` inclusive.
 *
 * Please take care to write a solution which runs within the time limit.
 *
 * Constraints
 * 1 <= A <= B <= 10^12
 *
 * Sample test case #1
 * A = 75
 * B = 300
 *
 * Expected Return Value = 5
 *
 * Sample test case #2
 * A = 1
 * B = 9
 *
 * Expected Return Value = 9
 *
 * Sample test case #3
 * A = 999999999999
 * B = 999999999999
 *
 * Expected Return Value = 1
 */

function getUniformIntegerCountInInterval(A: number, B: number) {
  // Create a method to quickly determine if a number is uniform - make the
  // number a string, split it into an array, create a set from it, and see if
  // the size of the set is 1.
  const isUniform = (N: number) => new Set(N.toString().split('')).size === 1;
  // Create a method to return the next uniform integer so we can skip all
  // numbers in betwwen our current position and the next uniform integer...
  const nextUniformInt = (N: number) => {
    // When the number is less than or equal to 10 then the next uniform integer
    // is just the next number. This will return 1-9 or 11.
    if (N <= 10) {
      return N + 1;
    }

    // When the number is greater than or equal to 11...
    // Create a string of our number
    const str = N.toString();
    // Determine the first digit of the number
    const firstDigit = str.charAt(0);
    // Create a variable to track the [low, high] possibilities where low is
    // the first digit repeated the same number of times as the length of our
    // stringified number and the high is the first digit plus one repeated for
    // the length of our stringified number.
    let highLow;

    // When the first digit is 9 we actually need the low to be the same, but
    // for the high we actually want to repeat the digit 1 for the length of our
    // number plus one extra digit as it adds to the tens... Otherwise, just use
    // the normal [low, high]...
    if (parseInt(firstDigit) === 9) {
      highLow = [parseInt(new Array(str.length).fill('9').join('')), parseInt(new Array(str.length + 1).fill('1').join(''))];
    } else {
      highLow = [parseInt(new Array(str.length).fill(firstDigit).join('')), parseInt(new Array(str.length).fill((parseInt(firstDigit) + 1).toString()).join(''))];
    }

    // When the given number is lower than our low number, return the low
    // uniform integer and when the given number is greater than or equal to the
    // low uniform integer we want to return the high uniform integer...
    return N < highLow[0] ? highLow[0] : highLow[1];
  };

  // Set up a way to track our number of uniform integers
  let count = 0;

  // Loop from A to B...
  for (let i = A; i <= B; i++) {
    if (isUniform(i)) {
      // When the current number is a uniform integer, increment our counter...
      count += 1;
    } else {
      // When the current number is NOT a uniform integer, calculate the next
      // uniform integer and assign that to i so we skip all numbers between our
      // current number and the next uniform integer...
      i = nextUniformInt(i);
    }
  }

  // Return the count of uniform integers between A and B
  return count;
}
