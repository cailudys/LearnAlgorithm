class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }

  // 追加节点
  append(value: T) {
    const newNode = new Node(value);

    if (this.head) {
      let current: Node<T> | null = this.head;
      while (current.next) {
        current = current.next;
        debugger;
      }

      current.next = newNode;
    }

    if (!this.head) {
      this.head = newNode;
    }

    this.size++;
  }

  // 遍历链表的方法
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
console.log("333333333", linkedList.length);
linkedList.traverse();

export {};
