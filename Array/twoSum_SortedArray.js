/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0, j = nums.length - 1
    let pair = []
    while (i < j) {
        const sum = nums[i] + nums[j]
        if (sum === target) {
            pair = [i, j]
            break;
        } else if (sum > target) {
            j -= 1
        } else {
            i += 1
        }
    }
    return pair
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([0, 2, 9, 15], 9))
console.log(twoSum([3, 3], 6))