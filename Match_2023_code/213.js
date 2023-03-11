/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  // 第一个数代表没选第0项的当前和，第二个数代表选了第0项的当前和
  const dp = new Array(len).fill(0).map(() => new Array(2).fill(0));
  dp[0] = [0, nums[0]];
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 1) {
        if (j === 1) {
          // 第二项，选择了第0项
          dp[i][j] = nums[0];
        } else {
          // 第二项，没选择第0项,那就选择第一项
          dp[i][j] = nums[1];
        }
      } else if (i === len - 1 && j === 1) {
        // 最后一项，并且选择了第0项的情况
        dp[i][j] = dp[i - 1][j];
      } else {
        // 普遍情况
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 2][j] + nums[i]);
      }
    }
  }
  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
