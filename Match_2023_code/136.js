/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // a^a = 0    a^0 = a所以 1^2^2 = 1
  let ans = 0;
  for (let o of nums) {
    ans ^= o;
  }
  return ans;
};
