/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 由于题目要求的是，子数组元素个数不大于k。那么跟arr[3]在一个分组的情况一共有k种
// 现在i=3
// (arr[3])
// (arr[3],arr[2])
// (arr[3],arr[2],arr[1])
// 那么，我们计算dp[3]只需要计算出比较这k种组合的最大值即可。
// ============================================
// 上面容易让人不理解，这样可能会更好些：
// dp[2]+max(arr[3])*1
// dp[1]+max(arr[3], arr[2])*2
// dp[0]+max(arr[3], arr[2], arr[1])*3
// 计算dp[3]只需要计算出比较这k种组合的最大值即可。
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  if (n <= k) return Math.max(...arr) * n;
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < n; i++) {
    let temp = [arr[i]];
    let c = i;
    let max = 0;
    for (let j = 0; j < k; j++) {
      if (j > i) break;
      if (i - j - 1 >= 0) {
        max = Math.max(max, dp[i - j - 1] + Math.max(...temp) * (j + 1));
      } else {
        max = Math.max(max, Math.max(...temp) * (j + 1));
      }
      if (c > 0) temp.push(arr[--c]);
    }
    dp[i] = max; // dp = [1, 30, 45,54] i = 3
  }
  return dp[n - 1];
};
