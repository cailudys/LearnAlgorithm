import LinkedList from "./01_实现单向连链表LinkedList";
import { DoublyNode } from "./LinkedNode";

class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | null = null;
  protected tail: DoublyNode<T> | null = null;

  append(value: T): void {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      // 不能将一个父类的对象，复制给一个子类的类型
      // 可以将一个子类的对象赋值给一个父类的类型（多肽）
      // 也就是父类引用可以指向子类对像。
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value: T): void {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  postTraverse() {
    const values: T[] = [];
    let current = this.tail;
    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log(values.join("->"));
  }

  // 根据索引插入元素
  insert(value: T, position: number): boolean {
    if (position < 0 && position > this.length) return false;

    if (position === 0) {
      this.prepend(value);
    } else if (position === this.length) {
      this.append(value);
    } else {
      const newNode = new DoublyNode(value);
      const current = this.getNode(position) as DoublyNode<T>;

      current.prev!.next = newNode;
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev = newNode;

      this.length++;
    }
    return true;
  }

  // 根据所以删除元素
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head!.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      const current = this.getNode(position) as DoublyNode<T>;

      current.next!.prev = current.prev;
      current.prev!.next = current.next;
    }
    this.length--;
    return current?.value ?? null;
  }
}

// 测试append方法
console.log("----------------------append--------------------------");
const dLinkedList = new DoublyLinkedList<string>();
dLinkedList.append("aaa");
dLinkedList.append("bbb");
dLinkedList.append("ccc");
dLinkedList.append("ddd");
dLinkedList.prepend("abc");
dLinkedList.prepend("cba");
dLinkedList.traverse();
dLinkedList.postTraverse();
console.log("----------------------insert--------------------------");

dLinkedList.insert("why", 0);
dLinkedList.insert("kobe", 7);
dLinkedList.insert("james", 3);
dLinkedList.traverse();
dLinkedList.postTraverse();

console.log("----------------------removeAt--------------------------");
dLinkedList.removeAt(0);
dLinkedList.removeAt(7);
dLinkedList.traverse();
dLinkedList.postTraverse();
