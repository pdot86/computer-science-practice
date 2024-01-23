/**
 * Queues - A Tale of Two Stacks
 * Difficulty: Medium
 * Max Score: 30
 * Score: 30
 */

// Ignore declarations of provided/setup objects
declare function readLine(): string;
declare const inputLines: string[];

function main() {
  const q = [];
  let len = parseInt(inputLines.shift() || '0') + 0;

  while (len--) {
    const curr = readLine().split(' ');

    switch (curr[0]) {
      case '1':
        // enqueue
        q.push(curr[1]);
        break;
      case '2':
        // dequeue
        q.shift();
        break;
      case '3':
        // print
        process.stdout.write(q[0] + '\n');
        break;
      default:
        // error
        throw new Error('Invalid input string');
    }
  }
}
