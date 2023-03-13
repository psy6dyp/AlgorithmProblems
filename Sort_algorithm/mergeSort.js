//归并排序
const mergeSort = function (arr) {
  const merge = function (left, right) {
    const temp = [];
    while (left.length && right.length) {
      temp.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    //这个left和right都是有序数组，没加进去的肯定是增大的顺序，故直接加入即可
    return [...temp, ...left, ...right];
  };

  if (arr.length === 1) {
    return arr;
  } else {
    const mid = arr.length >> 1;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
};
console.log(mergeSort([3, 6, 9, 1, 5]));
