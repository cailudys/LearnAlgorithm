import Node from "../types/INode";
import { btPrint } from "hy-algokit";

// 实现树的节点类
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;

  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }

  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
}

// interface IBSTree<T> {
//   insert(value: T): T;
//   search(value: T): boolean;
//   min(): T;
//   max(): T;
//   inOrderTraverse(): void;
//   preOrderTraverse(): void;
//   postOrderTraverse(): void;
//   levelOrderTraverse(): void;
//   remove(value: T): boolean;
// }

// 实现树的类
class BSTree<T> {
  root: TreeNode<T> | null = null;

  // 递归插入节点
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    const direction = newNode.value < node.value ? "left" : "right";

    if (!node[direction]) {
      node[direction] = newNode;
      return;
    }

    this.insertNode(node[direction]!, newNode);
  }
  // 递归打印节点 - 先序遍历
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    console.log(node.value);
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }
  // 递归打印节点 - 中序遍历
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    this.inOrderTraverseNode(node.left);
    console.log(node.value);
    this.inOrderTraverseNode(node.right);
  }
  // 递归打印节点 - 后遍历
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (!node) return;
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.value);
  }

  // 搜索节点
  private searchNode(value: T) {
    // 1. 搜索是否存在传入的值，如果存在找出其父节点
    let current: TreeNode<T> | null = this.root;
    let parent: TreeNode<T> | null = null;
    while (current) {
      if (current.value === value) return current;

      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      // 如果current有值，那么current保存自己的父节点
      if (current) current.parent = parent;
    }
    return null;
  }
  // 递归插入数据的操作
  insert(value: T) {
    // 1. 根据传入的value创建TreeNode节点
    const newNode = new TreeNode(value);

    // 2.判断当前是否已经有值
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // 递归遍历节点 - 先序
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  // 后续遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  // 层级遍历
  levelOrderTraverse() {
    if (!this.root) return;

    const queue: TreeNode<T>[] = [];

    queue.push(this.root);

    while (queue.length) {
      const current = queue.shift()!;
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  // 获取最大值
  getMaxValue(): T | null {
    let curret = this.root;
    while (curret && curret.right) {
      curret = curret.right;
    }
    return curret?.value ?? null;
  }
  // 获取最小值
  getMinValue(): T | null {
    let curret = this.root;
    while (curret && curret.left) {
      curret = curret.left;
    }
    return curret?.value ?? null;
  }
  // 搜索特定的值
  search(value: T): boolean {
    const node = this.searchNode(value);
    return !!node;
  }
  // 删除节点
  remove(value: T): boolean {
    const current = this.searchNode(value);
    if (!current) return false;

    // 2、获取到三个东西，当前节点，父节点，当前节点是左子节点还是右子节点？
    // console.log(current?.value, current?.parent?.value);
    // 2.如果删除的是叶子节点
    if (current.left === null && current.right === null) {
      // 叶子节点
      if (current === this.root) {
        this.root = null;
      } else if (current.isLeft) {
        current.parent!.left = null;
      } else {
        current.parent!.right = null;
      }
    }

    return true;
  }
}

const bst = new BSTree<number>();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(9);
bst.insert(13);
bst.insert(20);
bst.insert(3);
bst.insert(8);
bst.insert(10);
bst.insert(12);
bst.insert(14);
bst.insert(18);
bst.insert(25);
bst.insert(6);
btPrint(bst.root);

bst.remove(3);
bst.remove(8);
btPrint(bst.root);

export default BSTree;
