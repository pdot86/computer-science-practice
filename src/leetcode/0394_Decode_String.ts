/**
 * 394) Decode String
 * Difficulty:  Medium
 * Topics: String, Stack, Recursion
 * Companies: Bloomberg, TikTok, Google, Apple, Cisco, Amazon, eBay, Goldman Sachs, Zoho, Oracle, Walmart Labs, Facebook, Uber, Microsoft, Adobe, ByteDance, C3 IoT, Snapchat, Axon, Yahoo, Salesforce, Intuit, Sumologic, Cruise Automation, Qualtrics, Cohesity, Square, Snowflake, smartnews, Coupang, Yelp
 */

function decodeString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    // the current char
    const char = s.charAt(i);

    if (char === ']') {
      // the current char is the end of a template...
      // set up a sub string
      let sub: string = '';
      // set up what we will pop to
      let popChar = '';

      // when the last char in the stack is not a new substring
      while (stack.length && stack[stack.length - 1] !== '[') {
        popChar = stack.pop();
        // prepend the sub string
        sub = `${popChar}${sub}`;
      }

      // remove the '[' which is the current last char in the stack
      stack.pop();

      // now run through for a repeater int
      let num = '';

      while (stack.length) {
        popChar = stack.pop();

        if (isNaN(parseInt(popChar))) {
          stack.push(popChar);
          break;
        } else {
          num = `${popChar}${num}`;
        }
      }

      // make n a number we can use
      let n = parseInt(num) || 1;

      // append the substring to the stack n times
      while (n--) {
        stack.push(sub);
      }
    } else {
      // the current char is part of our letter pattern
      // push it to the stack
      stack.push(char);
    }
  }

  // stack now contains our pattern in the correct order
  // join it to a string and return
  return stack.join('');
}
