/**
 * 202) Happy Number
 * Difficulty:  Easy
 * Topics: Hash Table, Math, Two Pointers
 * Companies: Accenture, Amazon, Yahoo, Cisco, Adobe, Uber, Apple, Google, TikTok, Bloomberg, General Motors, Facebook, PayPal, Microsoft, Zoho, Airbnb, Twitter
 */

function isHappy(n: number): boolean {
  let isHappy = false;

  const numToArray = (x: number, digits: number[] = []): number[] => {
    if (x === 0) {
      return digits;
    }

    digits.unshift(x % 10);

    return numToArray(Math.floor(x / 10), digits);
  };

  let arr = numToArray(n);

  while (!isHappy) {
    let sum = 0;

    for (let digit of arr) {
      sum += digit ** 2;
    }

    if (sum === 4) {
      break;
    }

    if (sum === 1) {
      isHappy = true;
    } else {
      arr = numToArray(sum);
    }
  }

  return isHappy;
}
