/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
    const ans = []
    for (let i = 0; i < nums.length; i += 1) {
        ans[(i + k) % (nums.length)] = nums[i]
    }
    for (let i = 0; i < nums.length; i += 1) {
        nums[i] = ans[i]
    }
}

var rotate2 = function (nums, k) {
    k %= nums.length;

    const reverse = (left, right) => {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left += 1;
            right -= 1;
        }
    };

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    return nums
}
console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 2))