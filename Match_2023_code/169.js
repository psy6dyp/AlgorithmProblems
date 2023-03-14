/**
 * @param {number[]} nums
 * @return {number}
 */
// 摩尔投票
var majorityElement = function (nums) {
  let t;
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (c === 0) {
      t = nums[i];
      c++;
    } else if (nums[i] !== t) {
      c--;
    } else {
      c++;
    }
  }
  return t;
};
