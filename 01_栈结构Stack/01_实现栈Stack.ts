// 封装一个栈(类) 底层基于数组封装
class ArrayStack {
  // 定义一个数组，用于存储元素
  private data: any[] = [];

  // 1.添加一个新元素到栈顶为止
  push(element: any) {
    this.data.push(element);
  }
  // 2.移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.data.pop();
  }
  // 3.返回栈顶的元素，不对栈做任何修改
  peek(): any {
    const arrLength = this.data.length;
    if (arrLength > 0) {
      return this.data[arrLength - 1];
    }
    return null;
  }
  // 4. 判断栈中是否有元素
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  // 5. 返回栈里元素的个数
  size(): number {
    return this.data.length;
  }
}

// 创建Stack的实例
const stack1 = new ArrayStack();

stack1.push("aaa");
stack1.push("bbb");
stack1.push("ccc");
console.log("stack1.size()", stack1.size());
console.log("stack1.peek()", stack1.peek());
console.log("stack1.isEmpty()", stack1.isEmpty());
stack1.pop();
console.log("stack1.size()", stack1.size());
