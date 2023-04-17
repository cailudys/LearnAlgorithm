import ArrayStack from "./02_实现栈Stack(重构)";

function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack<number>();

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

export {};
