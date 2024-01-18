/**
 * 49) Group Anagrams
 * Difficulty:  Medium
 * Topics: Array, Hash Table, String, Sorting
 * Companies: Amazon, Apple, Yandex, Google, Zoho, Facebook, Goldman Sachs, Adobe, Salesforce, ServiceNow, Oracle, Yahoo, Microsoft, eBay, Bloomberg, Nvidia, Tesla, Walmart Labs, Affirm, PayPal, Visa, Atlassian, EPAM Systems, JPMorgan, Uber, Nutanix, Intuit, Expedia, BlackRock, SIG, Twilio, TikTok, Rivian, VMware, Samsung, Netflix, MathWorks, Snapchat, IBM, Cisco, Cruise Automation, Avalara, ola, Faire, Veeva, Yelp
 */

function groupAnagrams(strs: string[]): string[][] {
  const result = new Array();
  const map = new Map();
  let pointer = 0;

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const key = str.split('').sort().join('');

    if (map.has(key)) {
      const idx = map.get(key);
      result[idx].push(str);
    } else {
      map.set(key, pointer);
      result[pointer] = [str];
      pointer += 1;
    }
  }

  return result;
}
