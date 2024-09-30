/**
 * https://leetcode.com/problems/merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1
    while (j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            nums1[i] = 0
            i -= 1
        } else {
            nums1[k] = nums2[j]
            j -= 1
        }
        k -= 1
    }
    return nums1
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))