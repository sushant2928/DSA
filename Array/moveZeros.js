/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {

    for (let i = 0; i < nums.length; i += 1) {
        let j = i + 1
        if (nums[i] === 0) {
            console.log({ i, val: nums[i], j })
            while (nums[j] === 0 && j < nums.length) {
                j += 1
            }
            console.log({ j })
            if (j < nums.length) {
                nums[i] = nums[j]
                nums[j] = 0
            }
        }
    }
    return nums
};

var moveZeroes2 = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i += 1) {
        console.log({ i, j, valI: nums[i], valJ: nums[j] })
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j += 1
        }
    }
    return nums
};
console.log(moveZeroes1([1, 0, 1]))
console.log(moveZeroes2([1, 0, 1]))