import ArrayStack from "./02_实现栈Stack(重构)";

function isValid(s: string): boolean {
  const stack = new ArrayStack<string>();

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
        if (c !== stack.pop()) return false;
        break;
    }
  }

  return stack.isEmpty();
}

console.log(isValid("(()}"));
console.log(isValid("[{[()]}()]"));
