/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 * 
 * brute force - O(N^2)
 */
var maxProfit = function (prices) {
    let maxProfit = 0
    for (let i = 0; i < prices.length - 1; i += 1) {
        for (let j = i + 1; j < prices.length; j += 1) {
            const diff = prices[j] - prices[i]
            if (diff > maxProfit) maxProfit = diff
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

/**
 * better solution - O(n)
 */

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
    let maxProfit = 0
    let i = 0, j = 1;
    while (i < j && j < prices.length) {
        let diff = prices[j] - prices[i]
        if (diff > maxProfit) maxProfit = diff
        if (diff < 0) {
            i = j
        }
        j += 1
    }
    return maxProfit
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]))
console.log(maxProfit2([7, 6, 4, 3, 1]))
