/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    // 根据value查找节点
    findByValue(item) {
        let currentNode = this.head.next
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    // 根据index查找节点，下标从0开始
    findByIndex(index) {
        let currentNode = this.head.next
        let pos = 0
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }
    // 向链表末尾追加节点
    append(newElement) {
        const newNode = new Node(newElement)
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    // 指定元素向后插入
    insert(newElement, element) {
        const currentNode = this.findByValue(element)
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return
        }
        const newNode = new Node(newElement)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    // 查找前一个
    findPrev(item) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if (currentNode.next === null) {
            return -1
        }
        return currentNode
    }
    // 根据值删除
    remove(item) {
        const prevNode = this.findPrev(item)
        if (prevNode === -1) {
            console.log('未找到该元素')
            return
        }
        prevNode.next = prevNode.next.next
    }
    // 遍历显示所有节点
    display(item) {
        let currentNode = this.head.next //忽略头指针的值
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// Test
const LList = new LinkedList()
LList.append('one')
LList.append('three')
console.log('-------------insert item------------')

LList.insert('two', 'one') //首元素后插入
LList.insert('four', 'three') //尾元素后插入

console.log(LList.display()) // one => two => three => four

console.log('-------------remove item------------')

LList.remove('four') //尾元素后插入

console.log('-------------find by item------------')

console.log(LList.findByValue('two')) // two

console.log('-------------find by index------------')

console.log(LList.findByIndex(2)) // three

console.log('-------------与头结点同值元素测试------------')

LList.insert('head', 'one')
console.log(LList.display()) //one => head => two => three
console.log(LList.findPrev('head')) //one
LList.remove('head')
console.log(LList.display()) //one => two => three