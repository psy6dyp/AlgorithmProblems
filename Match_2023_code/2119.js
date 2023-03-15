/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return !num || num % 10 !== 0;
};
// var isSameAfterReversals = function (num) {
//   if (num === 0) return true;
//   if (num % 10 === 0) {
//     return false;
//   }
//   return true;
// };
