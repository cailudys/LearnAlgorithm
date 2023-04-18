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

  // 指定位置插入节点
  insert(value: T, position: number): boolean {
    // 越界判断
    if (position < 0 || position > this.size) return false;

    // 根据value创建新的节点
    const newNode = new Node(value);

    if (position === 0) {
      // 插入到链表头部
      this.insertAtHead(newNode);
    } else {
      // 在指定位置插入节点
      this.insertAtPosition(newNode, position);
    }

    // 更新链表长度
    this.size++;

    return true;
  }

  // 指定位置删除节点
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.size) return null;

    let current = this.head;
    if (position === 0) {
      this.head = this.head!.next;
    } else {
      const previousNode = this.getNode(position - 1);
      current = previousNode!.next;
      // 更新前一个节点的next指针，从而删除当前节点
      previousNode!.next = previousNode!.next?.next ?? null;
    }

    // 更新链表长度
    this.size--;

    // 返回被删除节点的值
    return current?.value ?? null;
  }

  // 获取对应位置的元素值
  get(position: number) {
    // 越界判断
    if (position < 0 || position >= this.size) return null;

    return this.getNode(position)?.value ?? null;
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

  // 修改更新节点
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }

  // 根据值，获取索引
  indexOf(value: T) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 根据值删除一项
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  // 判断链表是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 辅助函数：在链表头部插入节点
  private insertAtHead(newNode: Node<T>): void {
    newNode.next = this.head;
    this.head = newNode;
  }

  // 辅助函数：在指定位置插入节点
  private insertAtPosition(newNode: Node<T>, position: number): void {
    let previousNode = this.head;
    for (let i = 1; i < position; i++) {
      previousNode = previousNode!.next;
    }
    if (position === this.size) {
      previousNode!.next = newNode;
    } else {
      newNode.next = previousNode!.next;
      previousNode!.next = newNode;
    }
  }

  // 辅助函数：根据position 获取当前的节点（不是节点的value，而是整个节点）
  private getNode(position: number): Node<T> | null {
    let current = this.head;

    for (let i = 0; i < position; i++) {
      current = current!.next;
    }

    return current;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
console.log(linkedList.removeAt(4));
linkedList.traverse();

export {};
