import ArrayQueue from "../02_队列结构Queue/01_实现队列结构Queue";

class ArrayDeque<T> extends ArrayQueue<T> {
  /**头部添加 */
  addFront(value: T) {
    this.data.unshift(value);
  }
  /**尾部删除 */
  removeBack(): T | undefined {
    return this.data.pop();
  }
}

const deque = new ArrayDeque<string>();

deque.enqueue("aaa");
deque.enqueue("bbb");
deque.enqueue("ccc");
deque.addFront("ddd");
deque.addFront("eee");

export {};
