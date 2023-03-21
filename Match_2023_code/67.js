/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let a1 = BigInt("0b" + a);
  let b1 = BigInt("0b" + b);
  return (a1 + b1).toString(2);
};
