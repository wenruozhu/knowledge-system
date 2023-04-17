function longestCommonPrefix(strs) {
  for (let i = 0; i < strs.length; i++) {
    let arrItem = strs[i].split("");
    console.log(arrItem);
  }
  return "hello";
}
let strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);