/**
 * Regex - Alien Username
 * Difficulty: Easy
 * Max Score: 10
 * Score: 10
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  let len = parseInt(inputLines.shift() || '0');
  const rgx = /^[_.]{1}\d+[a-zA-Z]*_{0,1}$/;

  while (len--) {
    process.stdout.write((rgx.test(readLine()) ? 'VALID' : 'INVALID') + '\n');
  }
}
