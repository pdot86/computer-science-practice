/**
 * Regex - Capturing & Non-Capturing Groups
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /(ok){3,}/;

  for (let i = 0; i < inputLines.length; i++) {
    let line = readLine();

    process.stdout.write(rgx.test(line) + '\n');
  }
}
