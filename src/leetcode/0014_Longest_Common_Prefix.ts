/**
 * 14) Longest Common Prefix
 * Difficulty:  Easy
 * Topics: String, Trie
 * Companies: Amazon, Adobe, Apple, Facebook, Google, Uber, IBM, Yahoo, Bloomberg, Accenture, PornHub, Salesforce, Accolite, Microsoft, Expedia, SAP, Quora, Zoho, Oracle, Visa, VMware, Walmart Labs, ByteDance, Snapchat, Roblox, tcs, Nutanix, Cognizant, Capgemini, Amdocs, Yelp
 */

function longestCommonPrefix(strs: string[]): string {
  let common = '';
  let i = 0;
  let done = false;

  while (i < strs[0].length && !done) {
    done = !strs.every((s) => s.charAt(i) === strs[0].charAt(i));
    if (!done) {
      common += strs[0].charAt(i);
    }
    i += 1;
  }

  return common;
}
