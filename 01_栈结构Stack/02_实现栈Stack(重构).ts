// 封装一个栈(类) 底层基于数组封装
class ArrayStack<T = any> {
  // 定义一个数组，用于存储元素
  private data: T[] = [];

  // 1.添加一个新元素到栈顶为止
  push(element: T) {
    this.data.push(element);
  }
  // 2.移除栈顶的元素，同时返回被移除的元素
  pop(): T | undefined {
    return this.data.pop();
  }
  // 3.返回栈顶的元素，不对栈做任何修改
  peek(): T | undefined {
    const arrLength = this.data.length;
    if (arrLength > 0) {
      return this.data[arrLength - 1];
    }
    return undefined;
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

export {};
