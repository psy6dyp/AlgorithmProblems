var numWays = function (n) {
  const dp = [1, 1];
  const mod = 1000000007;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  return dp[n];
};
console.log(numWays(0));