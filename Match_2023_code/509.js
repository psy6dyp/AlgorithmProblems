var fib = function (n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  n = n - 1;
  let sum = 0;
  while (n--) {
    sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return sum;
};
