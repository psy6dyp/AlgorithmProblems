/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  // 这种情况不对11&11=11 11&00=0 这种情况对11&10=10 11&01=01
  while (n) {
    //注意这里的括号，===的优先级在&之上
    if ((n & 3) === 3 || (n & 3) === 0) return false;
    n >>= 1;
  }
  return true;
};
