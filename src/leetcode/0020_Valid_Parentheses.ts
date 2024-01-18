/**
 * 20) Valid Parentheses
 * Difficulty:  Easy
 * Topics: String, Stack
 * Companies: Amazon, Bloomberg, Apple, BlackRock, Google, Adobe, turing, Facebook, Oracle, Salesforce, Microsoft, TikTok, Yandex, Uber, Goldman Sachs, Epic Systems, Zoho, Ozon, ServiceNow, Walmart Labs, Intel, tcs, Shopee, Veeva, Roblox, Yahoo, JPMorgan, Docusign, Huawei, Spotify, American Express, LinkedIn, Zillow, Expedia, VMware, Cisco, PayPal, MathWorks, eBay, IBM, Netflix, Societe Generale, Tesla, Siemens, Qualcomm, Lyft, Morgan Stanley, Booking.com, SAP, Flipkart, Twitch, Arista Networks, GE Healthcare, MakeMyTrip, Tiger Analytics, Accenture, NetApp, Tinkoff, Twitter, Airbnb, Zenefits
 */

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = [];

  const matchMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const st = s.split('');

  for (let i = 0; i < st.length; i++) {
    if (matchMap.hasOwnProperty(st[i])) {
      stack.push(st[i]);
    } else {
      if (stack.length) {
        if (st[i] === matchMap[stack[stack.length - 1]]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
