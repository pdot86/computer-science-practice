/**
 * 252) Meeting Rooms
 * Difficulty:  Easy
 * Topics: Array, Sorting
 * Companies: Palo Alto Networks, eBay, Google, Amazon, Bloomberg, Oracle, Apple, Facebook
 */

function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }

  return true;
}
