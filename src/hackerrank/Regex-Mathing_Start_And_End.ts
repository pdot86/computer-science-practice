/**
 * Regex - Matching Start & End
 * Difficulty: Easy
 * Max Score: 5
 * Score: 5
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /^\d\w{4}\.$/;

  for (let i = 0; i < inputLines.length; i++) {
    let line = readLine();

    process.stdout.write(rgx.test(line) + '\n');
  }
}
