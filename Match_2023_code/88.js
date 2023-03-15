/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (n--) {
    nums1.pop();
    nums1.unshift(nums2.shift());
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};
