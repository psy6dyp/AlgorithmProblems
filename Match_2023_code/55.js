/**
 * @param {number[]} nums
 * @return {boolean}
 */
//贪心算法 一直更新最远到哪个i 发现i比k大就到不了
var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false;
    k = Math.max(k, i + nums[i]);
  }
  return true;
};
