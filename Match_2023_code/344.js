var reverseString = function (s) {
  let p = 0
  let q = s.length - 1
  while (p < q) {
    let temp = s[p]
    s[p] = s[q]
    s[q] = temp
    p++
    q--
  }
  return s
};