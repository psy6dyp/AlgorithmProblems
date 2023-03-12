/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  // 每次归0一位
  for (let k = i; k <= j; k++) {
    // 比如把10110变成10100 10110 & ~(00010) = 10110 & 11101 = 10100
    N &= ~(1 << k);
  }
  // 假设M是101 假设i是3 最后按位或左移i个的M 0000101000
  return (N |= M << i);
};
