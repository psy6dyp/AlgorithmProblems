var reverseWords = function (s) {
  s = s.trim()
  let a = Array.from(s)
  let b = []
  let len = a.length
  let cur = ''
  for (let i = 0; i < len; i++) {
    console.log(a[i]);
    if (a[i] === ' ') {
      if (cur !== '') {
        b.unshift(cur)
        cur = ''
      }
    } else {
      cur += a[i]
    }
  }
  console.log(b);
  if (cur) b.unshift(cur)
  console.log(b);
  return b.join(' ')
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));