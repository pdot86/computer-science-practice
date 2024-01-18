/**
 * 253) Meeting Rooms II
 * Difficulty:  Medium
 * Topics: Array, Two Pointers, Greedy, Sorting, Heap (Priority Queue), Prefix Sum
 * Companies: Facebook, Google, IBM, TikTok, Bloomberg, Microsoft, Amazon, Oracle, Pinterest, Yandex, Apple, Snapchat, Salesforce, Goldman Sachs, Miro, Uber, eBay, Walmart Labs, PayPal, Visa, ByteDance, Cruise Automation, Splunk, Workday
 */

function minMeetingRooms(intervals: number[][]): number {
  intervals.sort((a, b) => a[0] - b[0]);

  let bookings = [intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    let currStartTime = bookings.reduce((acc, curr) => {
      acc = acc > curr ? curr : acc;
      return acc;
    }, bookings[0]);

    if (start < currStartTime) {
      bookings.push(end);
    } else {
      bookings[bookings.indexOf(currStartTime)] = end;
    }
  }

  return bookings.length;
}
