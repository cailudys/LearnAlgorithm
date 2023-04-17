"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 封装一个栈(类) 底层基于数组封装
class ArrayStack {
    constructor() {
        // 定义一个数组，用于存储元素
        this.data = [];
    }
    // 1.添加一个新元素到栈顶为止
    push(element) {
        this.data.push(element);
    }
    // 2.移除栈顶的元素，同时返回被移除的元素
    pop() {
        return this.data.pop();
    }
    // 3.返回栈顶的元素，不对栈做任何修改
    peek() {
        const arrLength = this.data.length;
        if (arrLength > 0) {
            return this.data[arrLength - 1];
        }
        return undefined;
    }
    // 4. 判断栈中是否有元素
    isEmpty() {
        return this.data.length === 0;
    }
    // 5. 返回栈里元素的个数
    size() {
        return this.data.length;
    }
}
exports.default = ArrayStack;
//# sourceMappingURL=02_%E5%AE%9E%E7%8E%B0%E6%A0%88Stack(%E9%87%8D%E6%9E%84).js.map