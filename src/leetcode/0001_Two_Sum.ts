/**
 * 1) Two Sum
 * Difficulty: Easy
 * Topics: Array, Hash Table
 * Companies: Amazon, Google, Adobe, Apple, Bloomberg, Microsoft, Uber, Facebook, Yahoo, Oracle, Yandex, IBM, Zoho, Nvidia, TikTok, Barclays, Huawei, Cisco, wipro, ServiceNow, DoorDash, Visa, Accenture, Cognizant, Capgemini, Tinkoff, Spotify, Deloitte, tcs, Morgan Stanley, ZScaler, BNY Mellon, Luxoft, CVENT, Careem, Expedia, Goldman Sachs, American Express, eBay, Samsung, Zillow, JPMorgan, Walmart Labs, Infosys, MakeMyTrip, SAP, BlackRock, Nagarro, Intel, Qualcomm, Dell, Accolite, Zoom, Zomato, Info Edge, Bank of America, Twitter, PayPal, VMware, Salesforce, Deutsche Bank, Arista Networks, FactSet, Twitch, Shopee, LinkedIn, Airbnb, Yelp, Dropbox
 */

function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];

    if (map.has(remainder)) {
      result = [i, map.get(remainder)];
      break;
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
}
