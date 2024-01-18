/**
 * 181) Employees Earning More Than Their Managers
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Amazon, Yahoo, Uber, Google, Facebook, Bloomberg, Microsoft, Wix
 */

SELECT ic.name as Employee
FROM Employee ic
INNER JOIN Employee man
ON ic.salary > man.salary
AND ic.managerId = man.id;