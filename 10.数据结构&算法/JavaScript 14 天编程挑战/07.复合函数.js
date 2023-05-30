/**
 * @param {Function[]} functions
 * @return {Function}
 */
// 未做出
var compose = function(functions) {

	return function(x) {

        while(functions.length > 0) {
            var fn = functions.pop()
            x = fn.call(this,x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */