"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_______Queue_1 = require("./01_\u5B9E\u73B0\u961F\u5217\u7ED3\u6784Queue");
function hotPotatp(list, num) {
    const arrayQueue = new _01_______Queue_1.default();
    // 将list中的 ['','','','']项都存入到 arrayQueue中
    list.forEach((item) => {
        arrayQueue.enqueue(item);
    });
    while (arrayQueue.size() > 1) {
        for (let i = 0; i < num; i++) {
            if (i < 2) {
                arrayQueue.dequeue;
                arrayQueue.enqueue;
            }
            if (i === 2)
                arrayQueue.dequeue;
        }
    }
    return arrayQueue.dequeue();
}
hotPotatp(["why", "111", "222", "333"], 3);
//# sourceMappingURL=02_%E9%9D%A2%E8%AF%95%E9%A2%98%E4%B8%80%E5%87%BB%E9%BC%93%E4%BC%A0%E8%8A%B1.js.map