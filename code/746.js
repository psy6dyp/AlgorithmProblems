var minCostClimbingStairs = function (cost) {
  const dp = [0, 0];
  let len = cost.length;
  for (let i = 2; i <= len; i++) {
    const min = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    dp.push(min);
  }
  return dp.pop();
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([1, 1]));
