/**
 * @param {string} s
 * @return {boolean}
 */
const parenthesis = ")"
const squareBracket = "]"
const bracket = "}"
var isValid = function (s) {
    const stringArr = s.split('')
    let isLegal = false
    for (let i = 0, len = stringArr.length; i < len; i += 1) {
        // console.log(stringArr[2 * i], stringArr[2 * i + 1])
        if (stringArr[2 * i] === '(') {
            if (stringArr[2 * i + 1] === parenthesis) {
                isLegal = true
            }
        } else if (stringArr[2 * i] === '[') {
            if (stringArr[2 * i + 1] === squareBracket) {
                isLegal = true
            }
        } else if (stringArr[2 * i] === '{') {
            if (stringArr[2 * i + 1] === bracket) {
                isLegal = true
            }
        }
    }
    return isLegal
};
// isValid("()[]{}")