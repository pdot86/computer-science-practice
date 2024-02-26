/**
 * 535) Encode and Decode TinyURL
 * Difficulty:  Medium
 * Topics: Hash Table, String, Design, Hash Function
 * Companies: Adobe, Bloomberg, Amazon, Google, Facebook, Uber
 */

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
  return `http://tinyurl.com/${new Buffer(longUrl).toString('base64')}`;
}

/**
 * Decodes a shortened URL to its original URL.
 */
const rgxtinyURL = /^http\:\/\/tinyurl\.com\//;
function decode(shortUrl: string): string {
  return new Buffer(shortUrl.replace(rgxtinyURL, ''), 'base64').toString('utf8');
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
