// dp[i]表示偷到i家的总和
var rob = function (nums) {
  const dp = [nums[0]];
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    if (i === 1) {
      dp[1] = Math.max(nums[0], nums[[1]]);
    } else {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
  }
  return dp[len - 1];
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
