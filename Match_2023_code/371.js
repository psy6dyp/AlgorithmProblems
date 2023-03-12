/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  //a^b是不进位的相加，(a&b)<<1可以得知那个位置应该要进位
  //用a ^ (a&b)<<1 得到新的a又可以得到新的不进位的相加 一直到 (a&b)<<1 === 0为止就不用进位了
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
