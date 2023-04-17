// 斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契以兔子繁殖为例子而引入，故又称为兔子数列，指的是这样一个数列：1、1、2、3、5、8、13、21、34。

// 在数学上，斐波纳契数列以如下被以递推的方法定义：F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n>=3，n∈N*）。

function fib(n) {
    if (typeof n === 'number' && n > 0 && parseInt(n) === n) {
        return n < 3 ? 1 : fib(n - 1) + fib(n - 2)
    } else {
        return '输入不合法，请输入正整数！'
    }
}