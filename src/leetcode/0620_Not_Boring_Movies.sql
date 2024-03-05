/**
 * 620) Not Boring Movies
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Amazon, Apple
 */

SELECT id,movie,description,rating FROM cinema WHERE description <> 'boring' AND MOD(id,2) = 1 ORDER BY rating DESC