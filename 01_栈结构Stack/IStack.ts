// 定义栈的接口

import IList from "../types/IList";

interface IStack<T> extends IList<T> {
  push(element: T): void;
  pop(): T | undefined;
}

export default IStack;
