/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 剑指 Offer II 101. 分割等和子集
var canPartition = function (nums) {
  let sum = nums.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  if (sum % 2 === 1) return false;
  sum >>= 1;
  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    for (let j = sum; j >= 0; j--) {
      if (j - cur >= 0 && dp[j - cur] === 1) {
        dp[j] = 1;
      }
    }
  }
  return dp[sum] === 1;
};
