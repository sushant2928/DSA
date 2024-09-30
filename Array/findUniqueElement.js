/**
 * https://leetcode.com/problems/single-number/
 */
const arr = [2, 3, 1, 4, 2, 3, 1]
const uniqueNumber = arr.reduce((prev, curr) => prev ^ curr)
console.log(uniqueNumber)