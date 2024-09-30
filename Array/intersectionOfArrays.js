/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     const nums1Map = new Map()
//     nums1.forEach((value, i) => nums1Map.set(value, i))
//     const set = new Set(nums2)
//     nums2 = Array.from(set)
//     return nums2.reduce((ans, value) => {
//         if (nums1Map.has(value)) {
//             ans.push(value)
//         }
//         return ans
//     }, [])

// };
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let i = 0, j = 0
    const ans = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            ans.push(nums1[i])
            i += 1
            j += 1
        } else if (nums1[i] > nums2[j]) {
            j += 1
        } else if (nums1[i] < nums2[j]) {
            i += 1
        }
    }
    return [...new Set(ans)]
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))