/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  //映射比如[2,5,6]子集如果是[5] 那就映射为010
  let n = nums.length;
  let sum = 0;
  // 1<<n是1*2^n 假设n是3 这里就是 i < 8
  for (let i = 0; i < 1 << n; i++) {
    let ans = 0;
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        //这里是相反的
        ans ^= nums[n - 1 - j];
        //其实这样也可以
        // ans ^= nums[j];
      }
    }
    sum += ans;
  }
  return sum;
};
