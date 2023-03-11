var generate = function (numRows) {
  const dp = new Array(numRows + 1).fill([]);
  dp[1] = [1];
  for (let i = 2; i <= numRows; i++) {
    const arr = [];
    const len = dp[i - 1].length;
    for (let j = 0; j < len - 1; j++) {
      arr.push(dp[i - 1][j] + dp[i - 1][j + 1]);
    }
    dp[i] = [1, ...arr, 1];
  }
  dp.shift();
  return dp;
};
