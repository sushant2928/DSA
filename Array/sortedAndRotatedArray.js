/**
 * https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let greaterThan = 0
    for (let i = 0; i < nums.length; i += 1) {
        if (i === nums.length - 1 && nums[i] > nums[0]) {
            greaterThan += 1
        }
        else if (nums[i] > nums[i + 1]) greaterThan += 1
        if (greaterThan > 1) return false
    }
    return true
};