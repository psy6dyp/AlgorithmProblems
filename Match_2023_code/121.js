/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = new Array(prices.length + 1).fill(0);
  dp[0] = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < min) {
      // 注意最小值的取法，不然容易超时（不能每趟循环都找前n个数的最小值 不然会崩，必须动态取最小）
      min = prices[i - 1];
    }
    if (min > prices[i]) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.max(dp[i - 1], prices[i] - min);
    }
  }
  return dp[prices.length - 1];
};
