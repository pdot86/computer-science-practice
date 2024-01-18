/**
 * 5) Longest Palindromic Substring
 * Difficulty:  Medium
 * Topics: String, Dynamic Programming
 * Companies: Amazon, Cisco, Apple, Adobe, Google, Oracle, Yahoo, Microsoft, Goldman Sachs, Walmart Labs, Facebook, Bloomberg, Wayfair, TikTok, Uber, Yandex, JPMorgan, Salesforce, Media.net, Tinkoff, ByteDance, Infosys, Visa, Zoho, Samsung, MakeMyTrip, ShareChat, Expedia, VMware, PayPal, Qualcomm, Dell, Morgan Stanley, Grab, ServiceNow, Paytm, tcs, Softwire, Altimetrik, Optiver, Wix
 */

function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  let longest = s.charAt(0);
  let start = 0;
  let end = s.length;

  for (let i = 0; i < s.length && s.length - i > longest.length / 2; i++) {
    start = i;
    end = s.length;
    let curr = s.slice(start, end);

    while (end > start && curr.length > longest.length) {
      if (isPalendrome(curr)) {
        longest = curr;
      }

      curr = s.slice(start, end--);
    }
  }

  return longest;
}

function isPalendrome(str: string): boolean {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str.charAt(start) === str.charAt(end)) {
      start += 1;
      end -= 1;
      continue;
    } else {
      return false;
    }
  }

  return true;
}
