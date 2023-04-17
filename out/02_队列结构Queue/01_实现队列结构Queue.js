"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayQueue {
    constructor() {
        // 内部是通过数组保存的
        this.data = [];
    }
    enqueue(element) {
        this.data.push(element);
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data[0];
    }
    isEmpty() {
        return this.data.length === 0;
    }
    size() {
        return this.data.length;
    }
}
exports.default = ArrayQueue;
//# sourceMappingURL=01_%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E7%BB%93%E6%9E%84Queue.js.map