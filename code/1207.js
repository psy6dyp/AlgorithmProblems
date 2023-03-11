var uniqueOccurrences = function (nums) {
  const m = new Map();
  for (let o of nums) {
    const g = m.get(o);
    if (g) {
      m.set(o, g + 1);
    } else {
      m.set(o, 1);
    }
  }
  const mArr = [...m.values()];
  const s = new Set(mArr);
  console.log(m.size, s.size);
  return s.size === m.size;
};
console.log(uniqueOccurrences([1, 2]));
