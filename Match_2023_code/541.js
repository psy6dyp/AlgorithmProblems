/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  function reverse(str) {
    const s = Array.from(str)
    let p = 0
    let q = s.length - 1
    while (p < q) {
      let temp = s[p]
      s[p] = s[q]
      s[q] = temp
      p++
      q--
    }
    return s.join('')
  }
  let len = s.length // 7
  for (let i = 0; i < len; i += 2 * k) {
    let s_pre = i === 0 ? '' : s.slice(0, i) //前面
    if (len - i < k) {
      let s_mid = s.slice(i)
      s = s_pre + reverse(s_mid)
      return s
      // 全部翻转 break
    } else if (len - i >= k && len - i < 2 * k) {
      // 翻转前k个 break
      let s_mid = s.slice(i, i + k)
      s_mid = reverse(s_mid)
      let s_last = s.slice(i + k)
      s = s_pre + s_mid + s_last
      return s
    } else {
      // 翻转前k个 continue
      let s_mid = s.slice(i, i + k)
      s_mid = reverse(s_mid)
      let s_last = s.slice(i + k)
      s = s_pre + s_mid + s_last
      continue
    }
  }
  return s
};

console.log(reverseStr('ab', 2));