/**
 * Regex - Matching Anything But a Newline
 * Difficulty: Easy
 * Max Score: 5
 * Score: 5
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /^(.{3}\.?){4}$/g;

  process.stdout.write(rgx.test(readLine()) + '\n');
}
