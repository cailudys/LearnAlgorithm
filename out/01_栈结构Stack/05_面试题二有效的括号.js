"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02____Stack____1 = require("./02_\u5B9E\u73B0\u6808Stack(\u91CD\u6784)");
function isValid(s) {
    const stack = new _02____Stack____1.default();
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        switch (c) {
            case "(":
                stack.push(")");
                break;
            case "{":
                stack.push("}");
                break;
            case "[":
                stack.push("]");
                break;
            default:
                if (c !== stack.pop())
                    return false;
                break;
        }
    }
    return stack.isEmpty();
}
console.log(isValid("(()}"));
console.log(isValid("[{[()]}()]"));
//# sourceMappingURL=05_%E9%9D%A2%E8%AF%95%E9%A2%98%E4%BA%8C%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.js.map