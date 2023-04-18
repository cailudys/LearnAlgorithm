"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    get length() {
        return this.size;
    }
    // 追加节点
    append(value) {
        const newNode = new Node(value);
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
                debugger;
            }
            current.next = newNode;
        }
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }
    // 遍历链表的方法
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const linkedList = new LinkedList();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
console.log("333333333", linkedList.length);
linkedList.traverse();
//# sourceMappingURL=01_%E5%AE%9E%E7%8E%B0LinkedList.js.map