var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (m.has(sub)) {
      return [m.get(sub), i];
    }
    m.set(nums[i], i);
  }
};
