/**
 * 290) Word Pattern
 * Difficulty:  Easy
 * Topics: Hash Table, String
 * Companies: Amazon, Zoho, Apple, Adobe, Facebook, Dropbox, Uber
 */

function wordPattern(pattern: string, s: string): boolean {
  const wordArr = s.split(/\s/g);
  const patternArr = pattern.split('');

  if (wordArr.length !== patternArr.length) {
    return false;
  }

  const wordSet = new Set(wordArr);
  const patternSet = new Set(patternArr);

  if (patternSet.size !== wordSet.size) {
    return false;
  }

  const map = new Map([...patternSet].map((v) => [v, '']));
  const words = s.split(/\s/g);
  let result = true;

  for (let i = 0; i < words.length && result === true; i++) {
    const pa = pattern.charAt(i);
    const val = map.get(pa);

    if (val) {
      if (words[i] === val) {
        continue;
      } else {
        result = false;
      }
    } else {
      if (wordSet.has(words[i])) {
        wordSet.delete(words[i]);
      }
      map.set(pa, words[i]);
    }
  }
  console.log(map);

  return result;
}
