var intersection = function (nums1, nums2) {
  const res = [];
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));
  for (let o of nums1) {
    if (nums2.indexOf(o) !== -1) {
      res.push(o);
    }
  }
  return res;
};
intersection([1, 2, 2, 1], [2, 2]);
