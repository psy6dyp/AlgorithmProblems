/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  const max = Math.max(n, 2)
  if (max % 2 === 0 && max % n === 0) return max
  const mul = n << 2
  for (let i = max + 1; i < mul; i++) {
    if (i % n === 0) return i
  }
  return mul
};