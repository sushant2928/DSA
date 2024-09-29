/**
 * https://www.naukri.com/code360/problems/duplicate-in-array_893397?source=youtube&campaign=love_babbar_codestudio1&utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_codestudio1
 */
// considering the range of array is 1 to 100
// Constraints:
// 1 <=  T  <= 10
// 2 <=  N <= 10 ^ 5
// 1 <=  ARR[i]  <= N - 1
const arr = [4, 1, 2, 3, 1]
let ans = 0
for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i]
}
for (let i = 1; i < arr.length; i++) {
    ans = ans ^ i
}
console.log({ ans })