import LinkedList from "./01_实现单向连链表LinkedList";

class CircularLinkedList<T> extends LinkedList<T> {
  // 重新实现的方法：append方法
  // 追加节点
  append(value: T): void {
    super.append(value);
    // 拿到最后一个节点next 指向第一个节点
    this.tail!.next = this.head;
  }
}

const cLinkedList = new CircularLinkedList<string>();
// console.log('-------------------测试append---------------------')
cLinkedList.append("aaa");
cLinkedList.append("bbb");
cLinkedList.append("ccc");
cLinkedList.append("ddd");
// cLinkedList.traverse()
