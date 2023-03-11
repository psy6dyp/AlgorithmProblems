var numberOfSteps = function (num) {
  const dp = [0];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      // 奇数: i-1到0的步数加一
      dp[i] = dp[i - 1] + 1;
    } else {
      //偶数: i/2到0的步数加一
      dp[i] = dp[i / 2] + 1;
    }
  }
  return dp[num];
};
console.log(numberOfSteps(14));
