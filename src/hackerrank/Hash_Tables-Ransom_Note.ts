/**
 * Hash Tables: Ransom Note
 * Difficulty: Easy
 * Max Score: 25
 * Score: 25
 */

function checkMagazine(magazine: string[], note: string[]): void {
  let mObj = magazine.reduce(
    (acc, curr) => {
      acc[curr] = acc[curr] || 0;
      acc[curr] += 1;

      return acc;
    },
    {} as Record<string, number>
  );

  const result = note.every((v) => {
    if (v in mObj && mObj[v] > 0) {
      mObj[v] -= 1;
      return true;
    }
    return false;
  })
    ? 'Yes'
    : 'No';

  process.stdout.write(result + '\n');
}
