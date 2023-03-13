const insertSort = function (arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};
console.log(insertSort([35, 70, 44, 50, 45, 44, 31, 11, 1, 44, 14, 7, 34, 16]));
