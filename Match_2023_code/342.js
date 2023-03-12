/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  //4的幂一定是2的幂，并且4的幂%3一定是1，2的幂%3也可能是2
  if (n < 1 || n & (n - 1) || n % 3 !== 1) return false;
  return true;
};
