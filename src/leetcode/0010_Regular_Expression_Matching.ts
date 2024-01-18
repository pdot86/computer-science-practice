/**
 * 10) Regular Expression Matching
 * Difficulty:  Hard
 * Topics: String, Dynamic Programming, Recursion
 * Companies: Amazon, Facebook, Microsoft, Apple, TikTok, Confluent, Luxoft, Google, Bloomberg, Nvidia, Adobe, Uber, Snapchat, Yahoo, JPMorgan, Oracle, instacart, Twitter, Airbnb
 */

function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`, 'g').test(s);
}
