/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 一位一位的与过去，如果答案非0 则该位置为1
  let count = 0;
  let s = 1;
  while (s) {
    if (n & s) {
      count++;
    }
    s <<= 1;
  }
  return count;
};
