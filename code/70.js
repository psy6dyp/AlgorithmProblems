var climbStairs = function (n) {
  if (n <= 2) return n;
  let sum = 0;
  const dp = [1, 2];
  n = n - 2;
  while (n--) {
    sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return sum;
};
