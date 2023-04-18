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
      }

      current.next = newNode;
    }

    if (!this.head) {
      this.head = newNode;
    }

    this.size++;
  }

  // 插入方法
  insert(value: T, position: number): boolean {
    // 越界判断
    if (position < 0 || position > this.size) return false;

    // 根据value创建新的节点
    const newNode = new Node(value);

    if (position === 0) {
      // 插入到链表头部
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 寻找插入位置的前一个节点
      let previousNode = this.head;
      for (let i = 1; i < position; i++) {
        previousNode = previousNode!.next;
      }

      // 将新节点插入到链表中
      newNode.next = previousNode!.next;
      previousNode!.next = newNode;
    }

    // 更新链表长度
    this.size++;

    return true;
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join("->"));
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.insert("abc", 0);
linkedList.insert("cba", 0);
linkedList.insert("ab", 3);
console.log("333333333", linkedList.length);
linkedList.traverse();

export {};
