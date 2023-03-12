/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  //先x^y，不一样的地方就是1
  //得到新的值，看看有几个1就可以了
  x ^= y;
  let s = 1;
  let count = 0;
  while (s) {
    if (s & x) {
      count++;
    }
    s <<= 1;
  }
  return count;
};
