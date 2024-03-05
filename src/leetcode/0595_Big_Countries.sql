/**
 * 595) Big Countries
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Amazon, Apple, Google, Bloomberg, Adobe, Facebook, Yahoo
 */
 
SELECT name,population,area FROM World WHERE (area > 3000000) OR (population > 25000000)