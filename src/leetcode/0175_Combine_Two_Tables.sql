/**
 * 175) Combine Two Tables
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Apple, Bloomberg, Amazon, Microsoft, Adobe, Google
 */

SELECT Person.FirstName, Person.LastName, Address.City, Address.State
FROM Person
LEFT JOIN Address ON Person.PersonId=Address.PersonId
ORDER BY Person.PersonId;