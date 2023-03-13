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
console.log(quickSort([7, 4, 2, 7, 9, 8]));