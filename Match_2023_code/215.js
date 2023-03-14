/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // function quicksort 先用快排排一下 在翻转一下取出arr[k-1]即可，这是很快实现的代码
  // 还有其他更好的方法
  const quickSort = function (arr) {
    if (arr.length <= 1) return arr;
    const mid = arr.length >> 1;
    const pivot = arr.splice(mid, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  };
  return quickSort(nums).reverse()[k - 1];
};
