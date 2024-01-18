/**
 * 196) Delete Duplicate Emails
 * Difficulty:  Easy
 * Topics: Database
 * Companies: Oracle, Amazon, Uber, Apple
 */

 # Write your MySQL query statement below
DELETE FROM Person WHERE Id in (SELECT Id FROM (SELECT *, row_number() OVER (PARTITION BY Email ORDER by Id) rownum FROM Person) a WHERE rownum != 1) 