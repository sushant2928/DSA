/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 * 
 * brute force
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