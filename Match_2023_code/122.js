/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let temp = prices[i] - prices[i - 1];
    if (temp > 0) {
      profit += temp;
    }
  }
  return profit;
};
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/solution/best-time-to-buy-and-sell-stock-ii-zhuan-hua-fa-ji/
