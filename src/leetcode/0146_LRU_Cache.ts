/**
 * 146) LRU Cache
 * Difficulty:  Medium
 * Topics: Hash Table, Linked List, Design, Doubly-Linked List
 * Companies: Facebook, Microsoft, Amazon, Google, Apple, TikTok, Oracle, Confluent, Adobe, Nvidia, Bloomberg, Citadel, Salesforce, Rubrik, LinkedIn, Walmart Labs, Goldman Sachs, Netflix, Uber, Samsung, Qualcomm, MongoDB, Yandex, Cruise Automation, TripAdvisor, carwale, VMware, Cisco, Tesla, ByteDance, MakeMyTrip, Twilio, Intuit, DoorDash, PayPal, Snapchat, eBay, Yahoo, Zillow, Zoom, Shopify, Shopee, Niantic, Cloudera, GoDaddy, Visa, Spotify, Twitch, Cohesity, Morgan Stanley, ServiceNow, Paytm, Swiggy, Akamai, Media.net, Sprinklr, National Instruments, Cashfree, Workday, Disney, smartnews, Palantir Technologies, Twitter, Zenefits
 */

class LRUCache {
  private capacity: number;
  private cache: Map<number, number> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    let result = -1;

    if (this.cache.has(key)) {
      result = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, result);
    }

    return result;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
