"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_______Queue_1 = require("./01_\u5B9E\u73B0\u961F\u5217\u7ED3\u6784Queue");
const queue = new _01_______Queue_1.default();
queue.enqueue("abc");
queue.enqueue("cba");
queue.enqueue("nba");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
//# sourceMappingURL=00_%E6%B5%8B%E8%AF%95%E9%98%9F%E5%88%97%E7%BB%93%E6%9E%84.js.map