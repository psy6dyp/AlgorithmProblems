const selectSort = function (arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let curMinIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[curMinIndex]) {
        curMinIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[curMinIndex];
    arr[curMinIndex] = temp;
  }
  return arr;
};
console.log(selectSort([29, 10, 14, 37, 14]));
