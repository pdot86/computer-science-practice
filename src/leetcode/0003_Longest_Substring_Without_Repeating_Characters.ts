/**
 * 3) Longest Substring Without Repeating Characters
 * Difficulty:  Medium
 * Topics: Hash Table, String, Sliding Window
 * Companies: Amazon, Bloomberg, Apple, Adobe, Yandex, Google, Microsoft, TikTok, Facebook, Tesla, Spotify, Walmart Labs, Yahoo, Salesforce, Nvidia, Flipkart, Uber, Zoho, JPMorgan, EPAM Systems, turing, BNY Mellon, Oracle, eBay, Agoda, PayPal, Intuit, Docusign, Accolite, Goldman Sachs, VMware, Expedia, Cisco, Visa, tcs, Accenture, Qualcomm, Zillow, Paytm, Infosys, Airtel, HPE, Alibaba, Twitch, Sumologic, Huawei, Capital One, Booking.com, ByteDance, American Express, Nagarro, IBM, Rubrik, BitGo, Arcesium, Capgemini, AMD, ola, Smartsheet, Yelp
 */

function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let end = s.charAt(i);

    if (map.has(end)) {
      let currStart = map.get(end) + 1;

      start = start > currStart ? start : currStart;
    }

    map.set(end, i);

    let currMax = i - start + 1;

    max = max > currMax ? max : currMax;
  }

  return max;
}
