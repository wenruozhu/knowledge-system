/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return [];
  let array = [],
    index = 1;
  while (array.length < arr.length) {
    let chunk = arr.slice(array.length, index * size);
    array.push(chunk);
    if (array.length + size > arr.length) {
      array.push(arr.slice(index * size));
    }

    index++;
  }
  return array;
};
console.log(chunk([1, 9, 6, 3, 2], 1));
// arr = [1,9,6,3,2], size = 3
// 输出：[[1,9,6],[3,2]]
