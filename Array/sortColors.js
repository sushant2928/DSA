/**
 * https://leetcode.com/problems/sort-colors/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
    let low = 0, high = nums.length - 1, index = 0;
    while (index <= high) {
        if (nums[index] === 1) {
            index += 1
        } else if (nums[index] === 0) {
            const temp = nums[index]
            nums[index] = nums[low]
            nums[low] = temp
            index += 1
            low += 1
        } else {
            const temp = nums[index]
            nums[index] = nums[high]
            nums[high] = temp
            high -= 1
        }
    }
    console.log(nums)
};
sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])
