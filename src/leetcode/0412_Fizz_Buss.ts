/**
 * 412) Fizz Buzz
 * Difficulty:  Easy
 * Topics: Math, String, Simulation
 * Companies: Amazon, Media.net, Cisco, JPMorgan, Google, Bloomberg, Apple, IBM, Facebook, Microsoft, LinkedIn, Adobe, Oracle, Uber, NetApp, CVENT
 */

function fizzBuzz(n: number): string[] {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let curr = '';
    if (i % 3 === 0) {
      curr += 'Fizz';
    }
    if (i % 5 === 0) {
      curr += 'Buzz';
    }
    if (!curr) {
      curr += i;
    }

    result.push(curr);
  }

  return result;
}
