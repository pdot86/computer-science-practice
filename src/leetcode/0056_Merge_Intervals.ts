/**
 * 56) Merge Intervals
 * Difficulty:  Medium
 * Topics: Array, Sorting
 * Companies: Facebook, Amazon, Bloomberg, Google, Microsoft, Roblox, TikTok, Apple, Netflix, Tesco, Cisco, Oracle, Adobe, Uber, JPMorgan, Yahoo, Walmart Labs, Nvidia, Yandex, Accenture, Ozon, Netskope, LinkedIn, Docusign, ServiceNow, Grammarly, Salesforce, Patreon, VMware, Expedia, Shopee, IBM, PayPal, Palantir Technologies, Snapchat, Booking.com, Morgan Stanley, eBay, Pinterest, Coupang, Atlassian, ByteDance, Verkada, Twitter, BlackRock, Qualtrics, IXL, Hotstar, Samsung, Cognizant, Workday, Rivian, Yelp, Wix
 */

function merge(intervals: number[][]): number[][] {
  const len = intervals.length;

  if (len <= 0) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < len; i++) {
    const curr = result.pop();
    const nxt = intervals[i];

    if (curr[1] >= nxt[0]) {
      result.push([curr[0], Math.max(curr[1], nxt[1])]);
    } else {
      result.push(curr, nxt);
    }
  }

  return result;
}
