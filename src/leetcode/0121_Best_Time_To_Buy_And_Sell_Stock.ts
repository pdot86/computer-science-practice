/**
 * 121) Best Time to Buy and Sell Stock
 * Difficulty:  Easy
 * Topics: Array, Dynamic Programming
 * Companies: Amazon, Adobe, Apple, Microsoft, Google, Facebook, Zoho, Accenture, Nvidia, Yandex, IBM, Media.net, Bloomberg, Uber, PayPal, Goldman Sachs, Yahoo, Salesforce, tcs, TikTok, Morgan Stanley, SAP, Walmart Labs, Visa, josh technology, DRW, Snapchat, Intel, Infosys, Bolt, Tinkoff, Oracle, JPMorgan, Cisco, Expedia, Zoox, eBay, VMware, Citadel, Atlassian, Samsung, Paytm, Citi, Groww, Wayfair, DE Shaw, Zynga, TripAdvisor, Capital One, Qualcomm, Alation, Societe Generale, MakeMyTrip, athenahealth, Sprinklr, Agoda, Bank of America, Netskope, The Trade Desk
 */

function maxProfit(prices: number[]): number {
  let buy: number = prices[0];
  let profit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(prices[i], buy);
    profit = Math.max(prices[i] - buy, profit);
  }

  return profit;
}
