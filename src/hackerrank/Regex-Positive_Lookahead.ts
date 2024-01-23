/**
 * Regex - Positive Lookahead
 * Difficulty: Easy
 * Max Score: 20
 * Score: 20
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const rgx = /o(?=oo)/g;
  let totalMatches = 0;

  for (let i = 0; i < inputLines.length; i++) {
    const matches = readLine().match(rgx);

    totalMatches += matches ? matches.length : 0;
  }

  process.stdout.write(`Number of matches : ${totalMatches}` + '\n');
}
