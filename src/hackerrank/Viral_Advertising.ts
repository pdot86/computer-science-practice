/**
 * Viral Advertising
 * Difficulty: Easy
 * Max Score: 15
 * Score: 15
 */

function viralAdvertising(n: number): number {
  let totalLikes = 0;
  let impressions = n ? 5 : 0;
  let likes = Math.floor(impressions / 2);

  totalLikes += likes;

  for (let i = 1; i < n; i++) {
    impressions = likes * 3;
    likes = Math.floor(impressions / 2);
    totalLikes += likes;
  }

  return totalLikes;
}
