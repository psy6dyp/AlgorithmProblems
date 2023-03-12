/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // 2的幂 & （2的幂 - 1） 一定是0
  // 比如 1000 & 0111 = 0
  if (n < 1 || n & (n - 1)) {
    return false;
  }
  return true;
};
