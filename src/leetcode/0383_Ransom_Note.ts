/**
 * 383) Ransom Note
 * Difficulty:  Easy
 * Topics: Hash Table, String, Counting
 * Companies: Facebook, Amazon, Adobe, Spotify, Apple, Google, Visa, tcs
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  const mag = magazine.split('');
  const note = ransomNote.split('');
  const magMap = new Map();

  if (note.length > mag.length) {
    return false;
  } else {
    mag.forEach((curr) => {
      if (magMap.has(curr)) {
        magMap.set(curr, magMap.get(curr) + 1);
      } else {
        magMap.set(curr, 1);
      }
    });

    return note.every((v) => {
      if (magMap.has(v) && magMap.get(v) > 0) {
        magMap.set(v, magMap.get(v) - 1);
        return true;
      } else {
        return false;
      }
    });
  }
}
