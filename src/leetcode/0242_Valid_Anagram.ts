/**
 * 242) Valid Anagram
 * Difficulty:  Easy
 * Topics: Hash Table, String, Sorting
 * Companies: Apple, Bloomberg, Amazon, Microsoft, Google, PayPal, Adobe, JPMorgan, Goldman Sachs, Yandex, Uber, Spotify, Facebook, Yahoo, Affirm, Walmart Labs, Cisco, Qualcomm, Deutsche Bank, Tesla, Cognizant, Autodesk, Virtusa, WePay, Delhivery, Yelp
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let sc = s.charAt(i);
    let tc = t.charAt(i);

    if (map.has(sc)) {
      map.set(sc, map.get(sc) + 1);
    } else {
      map.set(sc, 1);
    }

    if (map.has(tc)) {
      map.set(tc, map.get(tc) - 1);
    } else {
      map.set(tc, -1);
    }
  }

  for (let val of map.values()) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}
