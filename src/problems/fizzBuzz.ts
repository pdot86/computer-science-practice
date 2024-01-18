/**
 * Return an array where you include the current number, except when the number is a
 * multiple of 3, replace the number with "Fizz" and when the number is a multiple
 * of 5 replace it with "Buzz" and if it is a multiple of both 3 and 5 then replace
 * it with "FizzBuzz".
 */

type Result = ('Fizz' | 'Buzz' | 'FizzBuzz' | number)[];

/**
 * Generates an array of increasing consecutive numbers where multiples of 3 are replaced
 * with "Fizz", multiples of 5 are replaced by "Buzz", and multiple of both 3 and 5 are
 * replaced by "FizzBuzz".
 * @param n {number} The length you wish to go to
 * @returns {Result}
 */
function fizzBuzz(n: number): Result {
  let result: Result = [];

  for (let i = 1; i <= n; i++) {
    let curr: any = '';

    if (i % 3 === 0) {
      curr += 'Fizz';
    }
    if (i % 5 === 0) {
      curr += 'Buzz';
    }
    if (curr === '') {
      curr = i;
    }

    result.push(curr);
  }

  return result;
}

export default fizzBuzz;
