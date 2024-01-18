/**
 * 183) Customers Who Never Order
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Amazon, Apple, Bloomberg, Adobe
 */

SELECT c.name Customers 
FROM Customers c 
LEFT JOIN (SELECT DISTINCT customerId FROM Orders) o 
ON c.id = o.customerId 
WHERE o.customerId IS NULL