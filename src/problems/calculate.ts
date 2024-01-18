/**
 * Given an input for a calculation seperated by spaces and assuming there are no parenthesis, return the correct answer.
 */

type OperationSymbol = '^' | '*' | '/' | '+' | '-';
type Operation = (x: string, y: string) => number;

/**
 * A map the operations and their equations.
 */
const operationsMap = new Map<OperationSymbol, Operation>([
  ['^', (x, y) => Math.pow(parseInt(x), parseInt(y))],
  ['*', (x, y) => parseInt(x) * parseInt(y)],
  ['/', (x, y) => parseInt(x) / parseInt(y)],
  ['+', (x, y) => parseInt(x) + parseInt(y)],
  ['-', (x, y) => parseInt(x) - parseInt(y)],
]);

/**
 * The order of operations.
 */
const orderOfOperations: OperationSymbol[] = ['^', '*', '/', '+', '-'];

/**
 * A regular edxpression for a single space.
 */
const rgxSpace = /\s/g;

/**
 * Given a string of operations seperated by a aspace, calculate the final answer.
 * @param str {string} The given equation to calculate as a string
 * @returns number
 */
function calculate(str: string): number {
  let problem = str.split(rgxSpace);
  let currentOp = 0;

  while (problem.length > 1) {
    // we have an operation to handle
    // we must have a number, operation and a number
    for (let i = 1; i < problem.length - 1; i++) {
      if (problem[i] === orderOfOperations[currentOp]) {
        let val = (
          operationsMap.get(orderOfOperations[currentOp]) as Operation
        )(problem[i - 1], problem[i + 1]);
        !isNaN(val) && problem.splice(i - 1, 3, val.toString());
        break;
      }

      if (i === problem.length - 2) {
        currentOp += 1;
      }
    }
  }
  return parseInt(problem[0]);
}

export default calculate;
