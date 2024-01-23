/**
 * Regex - Matching Specific Characters
 * Difficulty: Easy
 * Max Score: 10
 * Score: 10
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /^[1-3][0-2][xs0][30Aa][xsu][\.\,]$/;

  for (let i = 0; i < inputLines.length; i++) {
    let line = readLine();

    process.stdout.write(rgx.test(line) + '\n');
  }
}
