/**
 * Regex - Split the Phone Numbers
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  let len = parseInt(inputLines.shift() || '0');
  const rgx = /^([0-9]{1,3})[-\s]([0-9]{1,3})[-\s]([0-9]{4,10})$/;

  while (len--) {
    process.stdout.write(readLine().replace(rgx, 'CountryCode=$1,LocalAreaCode=$2,Number=$3') + '\n');
  }
}
