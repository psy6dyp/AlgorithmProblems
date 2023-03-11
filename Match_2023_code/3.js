var lengthOfLongestSubstring = function (s) {
  const m = new Map();
  let l = 0;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i]) && m.get(s[i]) >= l) {
      l = m.get(s[i]) + 1;
    }
    num = Math.max(num, i + 1 - l);
    m.set(s[i], i);
  }
  return num;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
