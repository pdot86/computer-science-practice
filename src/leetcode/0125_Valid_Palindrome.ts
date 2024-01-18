/**
 * 125) Valid Palindrome
 * Difficulty:  Easy
 * Topics: Two Pointers, String
 * Companies: Facebook, Yandex, Adobe, Apple, Microsoft, Wayfair, EPAM Systems, Bloomberg, Google, Amazon, LinkedIn, Spotify, American Express, Toast, ServiceNow, Yahoo, Uber, Cisco, Oracle, TikTok, Tesla, Infosys, Zenefits
 */

function isPalindrome(s: string): boolean {
  s = s.replace(/\W|\_/g, '').toLowerCase();
  let len = s.length;
  let i = 0;
  let j = len - 1;
  let valid;

  while (i < len && j > i && valid !== false) {
    if (s.charAt(i) === s.charAt(j)) {
      i += 1;
      j -= 1;
    } else {
      valid = false;
    }
  }

  if (valid === undefined) {
    valid = true;
  }

  return valid;
}
