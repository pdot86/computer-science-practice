/**
 * 500) Keyboard Row
 * Difficulty:  Easy
 * Topics: Array, Hash Table, String
 * Companies: Amazon, Adobe, MathWorks
 */

function findWords(words: string[]): string[] {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

  return words.filter((v) => {
    return rows.some((r) => {
      return v
        .toLowerCase()
        .split('')
        .every((char) => r.indexOf(char) > -1);
    });
  });
}
