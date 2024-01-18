/**
 * 200) Number of Islands
 * Difficulty:  Medium
 * Topics: Array, Depth-First Search, Breadth-First Search, Union Find, Matrix
 * Companies: Facebook, Amazon, Bloomberg, Google, TikTok, Goldman Sachs, Yandex, Microsoft, LinkedIn, Uber, Oracle, Apple, Adobe, eBay, turing, Salesforce, Tesla, ByteDance, Walmart Labs, Cruise Automation, Yahoo, ServiceNow, BitGo, Ozon, DoorDash, PayPal, Snapchat, VMware, Twitch, Karat, Intuit, Shopee, Zillow, Dropbox, Nvidia, JPMorgan, Qualtrics, Palantir Technologies, Samsung, Visa, Cisco, Citadel, Square, Intel, Docusign, MakeMyTrip, Arcesium, Reddit, CrowdStrike, Chewy, Zenefits, Wix
 */

function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  let numIslands = 0;

  function dfsIsland(row: number, col: number) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') {
      return 0;
    }

    grid[row][col] = '0';
    dfsIsland(row + 1, col);
    dfsIsland(row - 1, col);
    dfsIsland(row, col + 1);
    dfsIsland(row, col - 1);

    return 1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numIslands += dfsIsland(i, j);
      }
    }
  }

  return numIslands;
}
