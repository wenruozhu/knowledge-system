/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
let str1 = "abcabcbb",
  str2 = "bbbbb",
  str3 = "";
// var lengthOfLongestSubstring = function(s) {
//   // 哈希集合，记录每个字符是否出现过
//   const occ = new Set();
//   const n = s.length;
//   if (n < 2) return s.length;
//   // 右指针，初始值为-1，相当于我们在字符串左边界的左侧，还没有开始移动
//   let rk = -1,
//     ans = 0;

//   for (let i = 0; i < n; i++) {
//     if (i != 0) {
//       // 左指针向右移动一格，移除一个字符
//       occ.delete(s.charAt(i - 1));
//     }
//     while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//       // 不断移动右指针
//       occ.add(s.charAt(rk + 1));
//       ++rk;
//     }
//     // 第 i 到 rk 个字符是一个极长的无重复字符子串
//     ans = Math.max(ans, rk - i + 1);
//   }
//   return ans;
// };
// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china&orderBy=most_votes&languageTags=javascript
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (n < 2) return s.length;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
};
console.log(lengthOfLongestSubstring(str1));
