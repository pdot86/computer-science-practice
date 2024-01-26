/**
 * Sequence Equation
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

function permutationEquation(p: number[]): number[] {
  let result = [];

  for (let i = 1; i <= p.length; i++) {
    result[i - 1] = p.indexOf( (p.indexOf(i) + 1) ) + 1;
  }

  return result;
}