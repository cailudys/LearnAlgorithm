"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02____Stack____1 = require("./02_\u5B9E\u73B0\u6808Stack(\u91CD\u6784)");
function decimalToBinary(decimal) {
    const stack = new _02____Stack____1.default();
    let binary = "";
    while (decimal > 0) {
        const result = decimal % 2;
        stack.push(result);
        decimal = Math.floor(decimal / 2);
    }
    while (!stack.isEmpty()) {
        binary = binary + stack.pop();
    }
    return binary;
}
console.log(decimalToBinary(35));
console.log("---------------------");
console.log(decimalToBinary(100));
//# sourceMappingURL=04_%E9%9D%A2%E8%AF%95%E9%A2%98%E4%B8%80%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6.js.map