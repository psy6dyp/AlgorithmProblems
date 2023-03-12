/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function (numbers) {
  numbers[0] ^= numbers[1]; // a = a^b
  numbers[1] ^= numbers[0]; // b = a^b^b = a
  numbers[0] ^= numbers[1]; // a = a^b^a = b
  return numbers;
};
