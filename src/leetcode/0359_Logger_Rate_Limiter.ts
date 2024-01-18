/**
 * 359) Logger Rate Limiter
 * Difficulty:  Easy
 * Topics: Hash Table, Design, Data Stream
 * Companies: Google, Atlassian, Oracle, Netflix, Microsoft, Amazon, Bloomberg, Square, Twilio, Apple
 */

class Logger {
  history: Map<string, number> = new Map();

  constructor() {}

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (this.history.has(message)) {
      let past = this.history.get(message) as number;

      if (timestamp >= past) {
        this.history.set(message, timestamp + 10);

        return true;
      } else {
        return false;
      }
    } else {
      this.history.set(message, timestamp + 10);

      return true;
    }
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
