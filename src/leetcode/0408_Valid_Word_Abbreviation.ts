/**
 * 408) Valid Word Abbreviation
 * Difficulty:  Easy
 * Topics: Two Pointers, String
 * Companies: Facebook, Datadog, Google, Amazon
 */

function validWordAbbreviation(word: string, abbr: string): boolean {
  if (word === abbr) {
    return true;
  }

  let wPointer = 0;
  let aPointer = 0;

  while (word.length > wPointer && abbr.length > aPointer) {
    let steps = 0;

    if (!isNaN(parseInt(abbr[aPointer]))) {
      if (abbr[aPointer] === '0') {
        return false;
      }

      while (aPointer < abbr.length && !isNaN(parseInt(abbr[aPointer]))) {
        steps = steps * 10 + parseInt(abbr[aPointer]);
        aPointer += 1;
      }

      wPointer += steps;
    } else {
      if (word[wPointer] !== abbr[aPointer]) {
        return false;
      } else {
        wPointer += 1;
        aPointer += 1;
      }
    }
  }

  return wPointer === word.length && aPointer === abbr.length;
}
