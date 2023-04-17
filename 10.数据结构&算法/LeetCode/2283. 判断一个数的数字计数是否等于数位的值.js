/**
 * @param {string} num
 * @return {boolean}
 */
// const digitCount = function (num) {
//     const countNum = (arrString, index) => {
//         // console.log(arrString, index)
//         let newArray = arrString.filter(function (item) {
//             console.log(item, index)
//             return item == index;
//         });
//         return newArray.length
//     }
//     if (num.length < 1 || num.length > 10) {
//         return false
//     }
//     const arrString = num.split('')
//     for (let i = 0, len = arrString.length; i < len; i++) {
//         countNum(arrString, i)
//     }

// };
var digitCount = function (num) {
    const h = new Map();
    const n = num.length;
    // 将 num 中的每一个数字用哈希表做一个统计
    for (let i = 0; i < n; i++) {
        const digit = num[i].charCodeAt() - '0'.charCodeAt();
        console.log('digit', digit)
        h.set(digit, (h.get(digit) || 0) + 1);
    }
    // h Map(3) { 1 => 2, 2 => 1, 0 => 1 }
    // console.log('h', h)
    for (let i = 0; i < n; i++) {
        const v = num[i].charCodeAt() - '0'.charCodeAt();
        // console.log('v', v)
        // console.log('h.get(i)', h.get(i))
        if ((h.get(i) || 0) !== v) {
            return false;
        }
    }
    return true;
};

digitCount("1210")
// digitCount("030")