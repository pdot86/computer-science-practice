/**
 * 621) Task Scheduler
 * Difficulty:  Medium
 * Topics: Array, Hash Table, Greedy, Sorting, Heap (Priority Queue), Counting
 * Companies: TikTok, Amazon, Bloomberg, Salesforce, zeta suite, zeta, Google, Microsoft, Apple, Facebook, Pinterest, DoorDash, Uber, Adobe, Cruise Automation, Oracle, eBay, Intuit
 */

function leastInterval(tasks: string[], n: number): number {
  const map = new Map();
  let maxCount = 0;
  let maxTaskCount = 0;

  tasks.forEach((t) => {
    const taskCount = map.has(t) ? map.get(t) + 1 : 1;

    if (taskCount > maxCount) {
      maxCount = taskCount;
      maxTaskCount = 1;
    } else if (taskCount === maxCount) {
      maxTaskCount++;
    }

    map.set(t, taskCount);
  });

  const cycles = Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxTaskCount);

  return cycles;
}
