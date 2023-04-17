class ArrayStack {
    constructor(n) {
        this.items = [] //数组
        this.count = 0 //栈中元素个数
        this.n = n //栈的大小
    }

    // 入栈操作
    push(item) {
        // console.log(this.count, this.n)
        if (this.count == this.n) return false

        this.items[this.count] = item;
        this.count++

        return true
    }

    // 出栈操作
    pop() {
        // 栈为空，则直接返回null
        if (this.count == 0) return null
        let tmp = this.items.pop();
        this.count--
        return tmp
    }
}

const arrStack = new ArrayStack(10)
arrStack.push('0')
arrStack.push('1')
arrStack.push('2')
arrStack.push('3')

arrStack.pop()
console.log(arrStack)