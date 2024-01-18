/**
 * 182) Duplicate Emails
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Amazon, Uber
 */

SELECT email 
FROM Person 
GROUP BY email 
HAVING COUNT(*) > 1