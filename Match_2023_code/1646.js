/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n <= 1) return n;
  const nums = new Array(n + 1).fill(0);
  nums[0] = 0;
  nums[1] = 1;
  for (let i = 2; i <= n; i++) {
    let half = i / 2;
    let subHalf = (i - 1) / 2;
    //也就两种情况。只需要判断一个就行了
    if (half === Math.floor(half)) {
      nums[i] = nums[half];
    } else {
      nums[i] = nums[subHalf] + nums[subHalf + 1];
    }
  }
  return Math.max(...nums);
};
console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(0));
console.log(getMaximumGenerated(100));
