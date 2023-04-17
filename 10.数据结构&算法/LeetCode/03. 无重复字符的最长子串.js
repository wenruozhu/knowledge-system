/**
 * @param {string} s
 * @return {number}
 */
let str1 = "abcabcbb",
  str2 = "bbbbb",
  str3 = "";
var lengthOfLongestSubstring = function (string) {
  let strCount = 0;
  let stringArr = string.split("");
  // console.log(stringArr)
  for (let i = 0, len = stringArr.length; i < len; i++) {
    strCount += 1;
    console.log(stringArr[i] == stringArr[i + 1]);
    if (stringArr[i] == stringArr[i + 1]) {
      return;
    }
  }
  console.log(strCount);
  return strCount;
};
console.log(lengthOfLongestSubstring(str1));
