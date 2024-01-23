/**
 * Regex - Alternative Matching
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /^((Mr?s?|Dr|Er)\.)[a-zA-Z]{1,}$/;

  for (let i = 0; i < inputLines.length; i++) {
    let line = readLine();

    process.stdout.write(rgx.test(line) + '\n');
  }
}
