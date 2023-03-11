var numDecodings = function (s) {
  s = " " + s;
  const len = s.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= len; i++) {
    let a = Number(s[i]);
    let b = Number(s[i - 1]) * 10 + a;
    if (a >= 1 && a <= 9) dp[i] += dp[i - 1];
    if (b >= 10 && b <= 26) dp[i] += dp[i - 2];
  }
  return dp[len - 1];
};
console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
