/**
 * 509) Fibonacci Number
 * Difficulty:  Easy
 * Topics: Math, Dynamic Programming, Recursion, Memoization
 * Companies: Microsoft4, Apple4, Amazon3, Nvidia3, Google2, tcs2, Adobe8, Infosys5, Spotify4, Oracle3, Goldman Sachs3, Yahoo2, Qualcomm2, Bloomberg2, JPMorgan2, Morgan Stanley2, Zillow2, Zoom2, Accenture2, WePay2, Juniper2
 */

function fib(n: number): number {
  function dp(n: number, memo: number[]): number {
    if (memo[n] !== undefined) {
      return memo[n];
    }

    if (n === 0) {
      memo[n] = 0;
    } else if (n === 1 || n === 2) {
      memo[n] = 1;
    } else {
      memo[n] = dp(n - 1, memo) + dp(n - 2, memo);
    }

    return memo[n];
  }

  return dp(n, []);
}
